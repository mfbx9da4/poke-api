/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type PalParkAreaListRequest = {
    limit?: number | undefined;
    offset?: number | undefined;
};

/**
 * OK
 */
export type PalParkAreaListResponseBody = {
    /**
     * The total number of pal park areas.
     */
    count?: number | undefined;
    /**
     * URL to retrieve the next page of pal park areas.
     */
    next?: string | null | undefined;
    /**
     * URL to retrieve the previous page of pal park areas.
     */
    previous?: string | null | undefined;
    results?: Array<components.PalParkArea> | undefined;
};

export type PalParkAreaListResponse = {
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
     * OK
     */
    object?: PalParkAreaListResponseBody | undefined;
};

/** @internal */
export namespace PalParkAreaListRequest$ {
    export type Inbound = {
        limit?: number | undefined;
        offset?: number | undefined;
    };

    export const inboundSchema: z.ZodType<PalParkAreaListRequest, z.ZodTypeDef, Inbound> = z
        .object({
            limit: z.number().int().optional(),
            offset: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.offset === undefined ? null : { offset: v.offset }),
            };
        });

    export type Outbound = {
        limit?: number | undefined;
        offset?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PalParkAreaListRequest> = z
        .object({
            limit: z.number().int().optional(),
            offset: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.limit === undefined ? null : { limit: v.limit }),
                ...(v.offset === undefined ? null : { offset: v.offset }),
            };
        });
}

/** @internal */
export namespace PalParkAreaListResponseBody$ {
    export type Inbound = {
        count?: number | undefined;
        next?: string | null | undefined;
        previous?: string | null | undefined;
        results?: Array<components.PalParkArea$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<PalParkAreaListResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            count: z.number().int().optional(),
            next: z.string().nullable().optional(),
            previous: z.string().nullable().optional(),
            results: z.array(components.PalParkArea$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.count === undefined ? null : { count: v.count }),
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.previous === undefined ? null : { previous: v.previous }),
                ...(v.results === undefined ? null : { results: v.results }),
            };
        });

    export type Outbound = {
        count?: number | undefined;
        next?: string | null | undefined;
        previous?: string | null | undefined;
        results?: Array<components.PalParkArea$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PalParkAreaListResponseBody> = z
        .object({
            count: z.number().int().optional(),
            next: z.string().nullable().optional(),
            previous: z.string().nullable().optional(),
            results: z.array(components.PalParkArea$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.count === undefined ? null : { count: v.count }),
                ...(v.next === undefined ? null : { next: v.next }),
                ...(v.previous === undefined ? null : { previous: v.previous }),
                ...(v.results === undefined ? null : { results: v.results }),
            };
        });
}

/** @internal */
export namespace PalParkAreaListResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: PalParkAreaListResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<PalParkAreaListResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => PalParkAreaListResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: PalParkAreaListResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PalParkAreaListResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => PalParkAreaListResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
