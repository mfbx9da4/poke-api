import { suite } from "uvu";
import * as assert from "uvu/assert";
import { PokeSDK } from "../src";
import { http } from "../src/http";
import { ErrorCode } from "../src/models";

const it = suite("PokeSDK/stats");

it("should get record by ID", async () => {
  const result = await PokeSDK.stats.get(1);
  assert.ok(result.data, "result.data should exist");
});

it("should get record by name", async () => {
  const result = await PokeSDK.stats.getByName("bulbasaur");
  assert.ok(result.data, "result.data should exist");
});

it("should throw NotFound Error", async () => {
  const res = await PokeSDK.stats.get(-1);
  assert.is(res.status, 404);
  assert.is(res.errorCode, ErrorCode.NotFound);
});

it("should throw ParseResponse Error", async () => {
  // Mock the server to respond with bad data
  const oldGet = http.get.bind(http);
  // @ts-expect-error
  http.get = async () => ({ status: 200, data: '{"bad": "data"}' });

  const res = await PokeSDK.stats.get(1);
  assert.is(res.errorCode, ErrorCode.ParseResponse);
  assert.is(res.status, 500);
  assert.is(res.data, '{"bad": "data"}');

  // Restore the server
  http.get = oldGet;
});

it.run();
