/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { EncounterMethodRate, EncounterMethodRate$ } from "./encountermethodrate";
import { Location, Location$ } from "./location";
import { Name, Name$ } from "./name";
import { PokemonEncounter, PokemonEncounter$ } from "./pokemonencounter";
import { z } from "zod";

export type LocationArea = {
    id?: number | undefined;
    name?: string | undefined;
    gameIndex?: number | undefined;
    encounterMethodRates?: Array<EncounterMethodRate> | undefined;
    location?: Location | undefined;
    names?: Array<Name> | undefined;
    pokemonEncounters?: Array<PokemonEncounter> | undefined;
};

/** @internal */
export namespace LocationArea$ {
    export type Inbound = {
        id?: number | undefined;
        name?: string | undefined;
        game_index?: number | undefined;
        encounter_method_rates?: Array<EncounterMethodRate$.Inbound> | undefined;
        location?: Location$.Inbound | undefined;
        names?: Array<Name$.Inbound> | undefined;
        pokemon_encounters?: Array<PokemonEncounter$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<LocationArea, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.number().int().optional(),
            name: z.string().optional(),
            game_index: z.number().int().optional(),
            encounter_method_rates: z.array(EncounterMethodRate$.inboundSchema).optional(),
            location: Location$.inboundSchema.optional(),
            names: z.array(Name$.inboundSchema).optional(),
            pokemon_encounters: z.array(PokemonEncounter$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.game_index === undefined ? null : { gameIndex: v.game_index }),
                ...(v.encounter_method_rates === undefined
                    ? null
                    : { encounterMethodRates: v.encounter_method_rates }),
                ...(v.location === undefined ? null : { location: v.location }),
                ...(v.names === undefined ? null : { names: v.names }),
                ...(v.pokemon_encounters === undefined
                    ? null
                    : { pokemonEncounters: v.pokemon_encounters }),
            };
        });

    export type Outbound = {
        id?: number | undefined;
        name?: string | undefined;
        game_index?: number | undefined;
        encounter_method_rates?: Array<EncounterMethodRate$.Outbound> | undefined;
        location?: Location$.Outbound | undefined;
        names?: Array<Name$.Outbound> | undefined;
        pokemon_encounters?: Array<PokemonEncounter$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, LocationArea> = z
        .object({
            id: z.number().int().optional(),
            name: z.string().optional(),
            gameIndex: z.number().int().optional(),
            encounterMethodRates: z.array(EncounterMethodRate$.outboundSchema).optional(),
            location: Location$.outboundSchema.optional(),
            names: z.array(Name$.outboundSchema).optional(),
            pokemonEncounters: z.array(PokemonEncounter$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.gameIndex === undefined ? null : { game_index: v.gameIndex }),
                ...(v.encounterMethodRates === undefined
                    ? null
                    : { encounter_method_rates: v.encounterMethodRates }),
                ...(v.location === undefined ? null : { location: v.location }),
                ...(v.names === undefined ? null : { names: v.names }),
                ...(v.pokemonEncounters === undefined
                    ? null
                    : { pokemon_encounters: v.pokemonEncounters }),
            };
        });
}