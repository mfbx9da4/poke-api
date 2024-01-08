import { suite } from "uvu";
import * as assert from "uvu/assert";

import * as OpenApiGenerator from "../../openapi-generator";

const it = suite("openapi-generator");

const config = OpenApiGenerator.createConfiguration({});
const sdk = new OpenApiGenerator.PokemonApi(config);

it("should get by id", async () => {
  const result = await sdk.pokemonRead(1);
  assert.is(result.id, 1, "id should be 1");
});

it("should handle not found", async () => {
  try {
    const result = await sdk.pokemonRead(-1);
  } catch (e: any) {
    assert.is(e.code, 404, "status should be 404");
  }
});

it.run();
