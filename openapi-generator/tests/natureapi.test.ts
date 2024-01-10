import { suite } from "uvu";
import * as assert from "uvu/assert";

import { NatureApi } from "../index";
import { config } from "./pokemonapi.test";

const it = suite("Nature API");

it("should get nature by id", async () => {
  const nature = new NatureApi(config);
  const result = await nature.natureRead(1);
  assert.is(result.id, 1, "id should be 1");
});

it("should get nature by name", async () => {
  const nature = new NatureApi(config);
  const result = await nature.natureRead("hardy");
  assert.is(result.id, 1, "id should be 1");
});

it("should handle nature not found", async () => {
  try {
    const nature = new NatureApi(config);
    const result = await nature.natureRead(-1);
  } catch (e: any) {
    assert.is(e.code, 404, "status should be 404");
  }
});

it.run();
