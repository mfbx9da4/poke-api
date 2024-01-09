import { suite } from "uvu";
import * as assert from "uvu/assert";
import { PokeSDK } from "../src";
import { http } from "../src/http";
import { ErrorCode } from "../src/models/SuccessResponse";
import { Pokemon } from "../src/models/Pokemon";
import { Expect, Equal } from "./ExpectTypes";

const it = suite("PokeSDK/pokemon");

it("should get record by ID", async () => {
  const result = await PokeSDK.pokemon.get(1);
  if (result.ok) {
    assert.ok(result.ok, "result.ok should be true");
    assert.ok(result.data, "result.data should exist");
    type checkErrorType = Expect<Equal<typeof result.error, undefined>>;
    type checkDataType = Expect<Equal<typeof result.data, Pokemon>>;
  } else {
    assert.unreachable("result.ok should be true");
    type checkErrorType = Expect<Equal<typeof result.error, string>>;
    type checkDataType = Expect<Equal<typeof result.data, any>>;
  }
});

it("should get record by name", async () => {
  const result = await PokeSDK.pokemon.getByName("bulbasaur");
  assert.ok(result.ok, "result.ok should be true");
  assert.ok(result.data, "result.data should exist");
});

it("should throw NotFound Error", async () => {
  const result = await PokeSDK.pokemon.get(-1);
  assert.ok(!result.ok, "result.ok should be false");
  assert.is(result.status, 404);
  assert.is(result.errorCode, ErrorCode.NotFound);
});

it("should throw ParseResponse Error", async () => {
  // Mock the server to respond with bad data
  const oldGet = http.get.bind(http);
  // @ts-ignore
  http.get = async () => ({ status: 200, data: '{"bad": "data"}' });

  const res = await PokeSDK.pokemon.get(1);
  assert.ok(!res.ok, "result.ok should be false");
  assert.is(res.errorCode, ErrorCode.ParseResponse);
  assert.is(res.status, 500);
  assert.is(res.data, '{"bad": "data"}');

  // Restore the server
  http.get = oldGet;
});

if (process.env["BRUTE_FORCE_TEST_PARSE_RECORDS"]) {
  it("should be able to parse all records", async () => {
    let i = 1;
    while (++i) {
      const result = await PokeSDK.pokemon.get(i);
      if (result.status === 404) return;
      if (!result.ok) {
        console.log("result", JSON.stringify(result, null, 2));
        console.log("result.error", result.error);
      }
      assert.ok(result.ok, `result.ok should be true for ${i}`);
    }
  });
}

it.run();
