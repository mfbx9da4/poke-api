/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import { z } from "zod";

export type VersionListRequest = {
  limit?: number | undefined;
  offset?: number | undefined;
};

/**
 * OK
 */
export type VersionListResponseBody = {
  /**
   * The total number of versions.
   */
  count?: number | undefined;
  /**
   * URL to retrieve the next page of versions.
   */
  next?: string | null | undefined;
  /**
   * URL to retrieve the previous page of versions.
   */
  previous?: string | null | undefined;
  results?: Array<components.Version> | undefined;
};

export type VersionListResponse = {
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
  object?: VersionListResponseBody | undefined;
};

/** @internal */
export namespace VersionListRequest$ {
  export type Inbound = {
    limit?: number | undefined;
    offset?: number | undefined;
  };

  export const inboundSchema: z.ZodType<
    VersionListRequest,
    z.ZodTypeDef,
    Inbound
  > = z
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

  export const outboundSchema: z.ZodType<
    Outbound,
    z.ZodTypeDef,
    VersionListRequest
  > = z
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
export namespace VersionListResponseBody$ {
  export type Inbound = {
    count?: number | undefined;
    next?: string | null | undefined;
    previous?: string | null | undefined;
    results?: Array<components.Version$.Inbound> | undefined;
  };

  export const inboundSchema: z.ZodType<
    VersionListResponseBody,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      count: z.number().int().optional(),
      next: z.string().nullable().optional(),
      previous: z.string().nullable().optional(),
      results: z.array(components.Version$.inboundSchema).optional(),
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
    results?: Array<components.Version$.Outbound> | undefined;
  };

  export const outboundSchema: z.ZodType<
    Outbound,
    z.ZodTypeDef,
    VersionListResponseBody
  > = z
    .object({
      count: z.number().int().optional(),
      next: z.string().nullable().optional(),
      previous: z.string().nullable().optional(),
      results: z.array(components.Version$.outboundSchema).optional(),
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
export namespace VersionListResponse$ {
  export type Inbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: Response;
    object?: VersionListResponseBody$.Inbound | undefined;
  };

  export const inboundSchema: z.ZodType<
    VersionListResponse,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      ContentType: z.string(),
      StatusCode: z.number().int(),
      RawResponse: z.instanceof(Response),
      object: z.lazy(() => VersionListResponseBody$.inboundSchema).optional(),
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
    object?: VersionListResponseBody$.Outbound | undefined;
  };

  export const outboundSchema: z.ZodType<
    Outbound,
    z.ZodTypeDef,
    VersionListResponse
  > = z
    .object({
      contentType: z.string(),
      statusCode: z.number().int(),
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }),
      object: z.lazy(() => VersionListResponseBody$.outboundSchema).optional(),
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
