/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { EncounterMethod, EncounterMethod$ } from "./encountermethod";
import { EncounterVersionDetails, EncounterVersionDetails$ } from "./encounterversiondetails";
import { z } from "zod";

export type EncounterMethodRate = {
    encounterMethod?: EncounterMethod | undefined;
    versionDetails?: Array<EncounterVersionDetails> | undefined;
};

/** @internal */
export namespace EncounterMethodRate$ {
    export type Inbound = {
        encounter_method?: EncounterMethod$.Inbound | undefined;
        version_details?: Array<EncounterVersionDetails$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<EncounterMethodRate, z.ZodTypeDef, Inbound> = z
        .object({
            encounter_method: EncounterMethod$.inboundSchema.optional(),
            version_details: z.array(EncounterVersionDetails$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.encounter_method === undefined
                    ? null
                    : { encounterMethod: v.encounter_method }),
                ...(v.version_details === undefined ? null : { versionDetails: v.version_details }),
            };
        });

    export type Outbound = {
        encounter_method?: EncounterMethod$.Outbound | undefined;
        version_details?: Array<EncounterVersionDetails$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, EncounterMethodRate> = z
        .object({
            encounterMethod: EncounterMethod$.outboundSchema.optional(),
            versionDetails: z.array(EncounterVersionDetails$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.encounterMethod === undefined
                    ? null
                    : { encounter_method: v.encounterMethod }),
                ...(v.versionDetails === undefined ? null : { version_details: v.versionDetails }),
            };
        });
}
