import { suite } from "uvu";
import * as assert from "uvu/assert";
import { StatApi } from "../index";
import { config } from "./pokemonapi.test";

export const it = suite("Stat API");
it("should get stat by id", async () => {
  const stats = new StatApi(config);
  const result = await stats.statRead(1);
  assert.is(result.id, 1, "id should be 1");
});
it("should get stat by name", async () => {
  const stats = new StatApi(config);
  const result = await stats.statRead("hp");
  assert.is(result.id, 1, "id should be 1");
});
it("should handle stat not found", async () => {
  try {
    const stats = new StatApi(config);
    const result = await stats.statRead(-1);
  } catch (e: any) {
    assert.is(e.code, 404, "status should be 404");
  }
});
it.run();
