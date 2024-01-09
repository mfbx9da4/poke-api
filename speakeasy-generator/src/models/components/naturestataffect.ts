/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Nature, Nature$ } from "./nature";
import { z } from "zod";

export type NatureStatAffect = {
    increase?: Array<Nature> | undefined;
    decrease?: Array<Nature> | undefined;
};

/** @internal */
export namespace NatureStatAffect$ {
    export type Inbound = {
        increase?: Array<Nature$.Inbound> | undefined;
        decrease?: Array<Nature$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<NatureStatAffect, z.ZodTypeDef, Inbound> = z
        .object({
            increase: z.array(Nature$.inboundSchema).optional(),
            decrease: z.array(Nature$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.increase === undefined ? null : { increase: v.increase }),
                ...(v.decrease === undefined ? null : { decrease: v.decrease }),
            };
        });

    export type Outbound = {
        increase?: Array<Nature$.Outbound> | undefined;
        decrease?: Array<Nature$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NatureStatAffect> = z
        .object({
            increase: z.array(Nature$.outboundSchema).optional(),
            decrease: z.array(Nature$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.increase === undefined ? null : { increase: v.increase }),
                ...(v.decrease === undefined ? null : { decrease: v.decrease }),
            };
        });
}