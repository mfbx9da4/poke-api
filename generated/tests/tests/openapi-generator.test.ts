import { suite } from "uvu";
import * as assert from "uvu/assert";

import * as OpenApiGenerator from "../../openapi-generator";

const it = suite("openapi-generator");

const config = OpenApiGenerator.createConfiguration({});

it("should get pokemon by id", async () => {
  const pokemon = new OpenApiGenerator.PokemonApi(config);
  const result = await pokemon.pokemonRead(1);
  assert.is(result.id, 1, "id should be 1");
});

it("should get pokemon by name", async () => {
  const pokemon = new OpenApiGenerator.PokemonApi(config);
  const result = await pokemon.pokemonRead("bulbasaur");
  assert.is(result.id, 1, "id should be 1");
});

it("should handle pokemon not found", async () => {
  try {
    const pokemon = new OpenApiGenerator.PokemonApi(config);
    const result = await pokemon.pokemonRead(-1);
  } catch (e: any) {
    assert.is(e.code, 404, "status should be 404");
  }
});

it("should get stat by id", async () => {
  const stats = new OpenApiGenerator.StatApi(config);
  const result = await stats.statRead(1);
  assert.is(result.id, 1, "id should be 1");
});

it("should get stat by name", async () => {
  const stats = new OpenApiGenerator.StatApi(config);
  const result = await stats.statRead("hp");
  assert.is(result.id, 1, "id should be 1");
});

it("should handle stat not found", async () => {
  try {
    const stats = new OpenApiGenerator.StatApi(config);
    const result = await stats.statRead(-1);
  } catch (e: any) {
    assert.is(e.code, 404, "status should be 404");
  }
});

it("should get nature by id", async () => {
  const nature = new OpenApiGenerator.NatureApi(config);
  const result = await nature.natureRead(1);
  assert.is(result.id, 1, "id should be 1");
});

it("should get nature by name", async () => {
  const nature = new OpenApiGenerator.NatureApi(config);
  const result = await nature.natureRead("hardy");
  assert.is(result.id, 1, "id should be 1");
});

it("should handle nature not found", async () => {
  try {
    const nature = new OpenApiGenerator.NatureApi(config);
    const result = await nature.natureRead(-1);
  } catch (e: any) {
    assert.is(e.code, 404, "status should be 404");
  }
});

it.run();
