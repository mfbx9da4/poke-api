/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type EncounterConditionValueReadRequest = {
    id: number;
};

export type EncounterConditionValueReadResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Successful response
     */
    encounterConditionValue?: components.EncounterConditionValue | undefined;
};

/** @internal */
export namespace EncounterConditionValueReadRequest$ {
    export type Inbound = {
        id: number;
    };

    export const inboundSchema: z.ZodType<
        EncounterConditionValueReadRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            id: z.number().int(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: number;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        EncounterConditionValueReadRequest
    > = z
        .object({
            id: z.number().int(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace EncounterConditionValueReadResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        EncounterConditionValue?: components.EncounterConditionValue$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        EncounterConditionValueReadResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            EncounterConditionValue: components.EncounterConditionValue$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.EncounterConditionValue === undefined
                    ? null
                    : { encounterConditionValue: v.EncounterConditionValue }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        EncounterConditionValue?: components.EncounterConditionValue$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        EncounterConditionValueReadResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            encounterConditionValue: components.EncounterConditionValue$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.encounterConditionValue === undefined
                    ? null
                    : { EncounterConditionValue: v.encounterConditionValue }),
            };
        });
}
