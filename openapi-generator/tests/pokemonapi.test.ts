import { suite } from "uvu";
import * as assert from "uvu/assert";
import { createConfiguration, PokemonApi } from "../dist";

export let it = suite("Pokemon API");
export const config = createConfiguration({});
it("should get pokemon by id", async () => {
  const pokemon = new PokemonApi(config);
  const result = await pokemon.pokemonRead(1);
  assert.is(result.id, 1, "id should be 1");
});
it("should get pokemon by name", async () => {
  const pokemon = new PokemonApi(config);
  const result = await pokemon.pokemonRead("bulbasaur");
  assert.is(result.id, 1, "id should be 1");
});
it("should handle pokemon not found", async () => {
  try {
    const pokemon = new PokemonApi(config);
    const result = await pokemon.pokemonRead(-1);
  } catch (e: any) {
    assert.is(e.code, 404, "status should be 404");
  }
});
it.run();
