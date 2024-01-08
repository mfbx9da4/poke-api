/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { NamedAPIResource, NamedAPIResource$ } from "./namedapiresource";
import { z } from "zod";

export type PokemonType = {
    /**
     * The order the Pokémon's types are listed in.
     */
    slot?: number | undefined;
    type?: NamedAPIResource | undefined;
};

/** @internal */
export namespace PokemonType$ {
    export type Inbound = {
        slot?: number | undefined;
        type?: NamedAPIResource$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<PokemonType, z.ZodTypeDef, Inbound> = z
        .object({
            slot: z.number().int().optional(),
            type: NamedAPIResource$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.slot === undefined ? null : { slot: v.slot }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });

    export type Outbound = {
        slot?: number | undefined;
        type?: NamedAPIResource$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PokemonType> = z
        .object({
            slot: z.number().int().optional(),
            type: NamedAPIResource$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.slot === undefined ? null : { slot: v.slot }),
                ...(v.type === undefined ? null : { type: v.type }),
            };
        });
}
