/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Generation, Generation$ } from "./generation";
import { z } from "zod";

export type GenerationGameIndex = {
    /**
     * The internal id of an API resource within game data.
     */
    gameIndex?: number | undefined;
    generation?: Generation | undefined;
};

/** @internal */
export namespace GenerationGameIndex$ {
    export type Inbound = {
        game_index?: number | undefined;
        generation?: Generation$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GenerationGameIndex, z.ZodTypeDef, Inbound> = z
        .object({
            game_index: z.number().int().optional(),
            generation: Generation$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.game_index === undefined ? null : { gameIndex: v.game_index }),
                ...(v.generation === undefined ? null : { generation: v.generation }),
            };
        });

    export type Outbound = {
        game_index?: number | undefined;
        generation?: Generation$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GenerationGameIndex> = z
        .object({
            gameIndex: z.number().int().optional(),
            generation: Generation$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.gameIndex === undefined ? null : { game_index: v.gameIndex }),
                ...(v.generation === undefined ? null : { generation: v.generation }),
            };
        });
}
