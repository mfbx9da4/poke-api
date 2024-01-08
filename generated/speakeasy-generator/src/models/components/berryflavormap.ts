/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { BerryFlavor, BerryFlavor$ } from "./berryflavor";
import { z } from "zod";

export type BerryFlavorMap = {
    /**
     * How powerful the referenced flavor is for this berry
     */
    potency: number;
    flavor: BerryFlavor;
};

/** @internal */
export namespace BerryFlavorMap$ {
    export type Inbound = {
        potency: number;
        flavor: BerryFlavor$.Inbound;
    };

    export const inboundSchema: z.ZodType<BerryFlavorMap, z.ZodTypeDef, Inbound> = z
        .object({
            potency: z.number().int(),
            flavor: BerryFlavor$.inboundSchema,
        })
        .transform((v) => {
            return {
                potency: v.potency,
                flavor: v.flavor,
            };
        });

    export type Outbound = {
        potency: number;
        flavor: BerryFlavor$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, BerryFlavorMap> = z
        .object({
            potency: z.number().int(),
            flavor: BerryFlavor$.outboundSchema,
        })
        .transform((v) => {
            return {
                potency: v.potency,
                flavor: v.flavor,
            };
        });
}
