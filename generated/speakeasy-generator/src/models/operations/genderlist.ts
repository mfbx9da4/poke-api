/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import { z } from "zod";

export type GenderListRequest = {
    limit?: number | undefined;
    offset?: number | undefined;
};

/**
 * OK
 */
export type GenderListResponseBody = {
    /**
     * The total number of genders.
     */
    count?: number | undefined;
    /**
     * URL to retrieve the next page of genders.
     */
    next?: string | null | undefined;
    /**
     * URL to retrieve the previous page of genders.
     */
    previous?: string | null | undefined;
    results?: Array<components.Gender> | undefined;
};

export type GenderListResponse = {
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
    object?: GenderListResponseBody | undefined;
};

/** @internal */
export namespace GenderListRequest$ {
    export type Inbound = {
        limit?: number | undefined;
        offset?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GenderListRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GenderListRequest> = z
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
export namespace GenderListResponseBody$ {
    export type Inbound = {
        count?: number | undefined;
        next?: string | null | undefined;
        previous?: string | null | undefined;
        results?: Array<components.Gender$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<GenderListResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            count: z.number().int().optional(),
            next: z.string().nullable().optional(),
            previous: z.string().nullable().optional(),
            results: z.array(components.Gender$.inboundSchema).optional(),
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
        results?: Array<components.Gender$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GenderListResponseBody> = z
        .object({
            count: z.number().int().optional(),
            next: z.string().nullable().optional(),
            previous: z.string().nullable().optional(),
            results: z.array(components.Gender$.outboundSchema).optional(),
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
export namespace GenderListResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GenderListResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GenderListResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GenderListResponseBody$.inboundSchema).optional(),
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
        object?: GenderListResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GenderListResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => GenderListResponseBody$.outboundSchema).optional(),
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
