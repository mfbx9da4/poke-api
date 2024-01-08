/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { z } from "zod";

export type PokemonShape = {
    /**
     * The identifier for this Pokemon shape resource
     */
    id?: number | undefined;
    /**
     * The name for this Pokemon shape resource
     */
    name?: string | undefined;
};

/** @internal */
export namespace PokemonShape$ {
    export type Inbound = {
        id?: number | undefined;
        name?: string | undefined;
    };

    export const inboundSchema: z.ZodType<PokemonShape, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.number().int().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });

    export type Outbound = {
        id?: number | undefined;
        name?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PokemonShape> = z
        .object({
            id: z.number().int().optional(),
            name: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
            };
        });
}
