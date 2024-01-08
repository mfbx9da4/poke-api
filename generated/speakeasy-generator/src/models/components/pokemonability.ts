/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Ability, Ability$ } from "./ability";
import { z } from "zod";

export type PokemonAbility = {
    isHidden?: boolean | undefined;
    slot?: number | undefined;
    ability?: Ability | undefined;
};

/** @internal */
export namespace PokemonAbility$ {
    export type Inbound = {
        is_hidden?: boolean | undefined;
        slot?: number | undefined;
        ability?: Ability$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<PokemonAbility, z.ZodTypeDef, Inbound> = z
        .object({
            is_hidden: z.boolean().optional(),
            slot: z.number().int().optional(),
            ability: Ability$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.is_hidden === undefined ? null : { isHidden: v.is_hidden }),
                ...(v.slot === undefined ? null : { slot: v.slot }),
                ...(v.ability === undefined ? null : { ability: v.ability }),
            };
        });

    export type Outbound = {
        is_hidden?: boolean | undefined;
        slot?: number | undefined;
        ability?: Ability$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PokemonAbility> = z
        .object({
            isHidden: z.boolean().optional(),
            slot: z.number().int().optional(),
            ability: Ability$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.isHidden === undefined ? null : { is_hidden: v.isHidden }),
                ...(v.slot === undefined ? null : { slot: v.slot }),
                ...(v.ability === undefined ? null : { ability: v.ability }),
            };
        });
}
