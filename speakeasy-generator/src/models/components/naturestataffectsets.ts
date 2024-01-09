/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { NatureStatAffect, NatureStatAffect$ } from "./naturestataffect";
import { z } from "zod";

export type NatureStatAffectSets = {
    increase: Array<NatureStatAffect>;
    decrease: Array<NatureStatAffect>;
};

/** @internal */
export namespace NatureStatAffectSets$ {
    export type Inbound = {
        increase: Array<NatureStatAffect$.Inbound>;
        decrease: Array<NatureStatAffect$.Inbound>;
    };

    export const inboundSchema: z.ZodType<NatureStatAffectSets, z.ZodTypeDef, Inbound> = z
        .object({
            increase: z.array(NatureStatAffect$.inboundSchema),
            decrease: z.array(NatureStatAffect$.inboundSchema),
        })
        .transform((v) => {
            return {
                increase: v.increase,
                decrease: v.decrease,
            };
        });

    export type Outbound = {
        increase: Array<NatureStatAffect$.Outbound>;
        decrease: Array<NatureStatAffect$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NatureStatAffectSets> = z
        .object({
            increase: z.array(NatureStatAffect$.outboundSchema),
            decrease: z.array(NatureStatAffect$.outboundSchema),
        })
        .transform((v) => {
            return {
                increase: v.increase,
                decrease: v.decrease,
            };
        });
}