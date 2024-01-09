/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import { z } from "zod";

export type LocationReadRequest = {
  id: number;
};

export type LocationReadResponse = {
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
  location?: components.Location | undefined;
};

/** @internal */
export namespace LocationReadRequest$ {
  export type Inbound = {
    id: number;
  };

  export const inboundSchema: z.ZodType<
    LocationReadRequest,
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
    LocationReadRequest
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
export namespace LocationReadResponse$ {
  export type Inbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: Response;
    Location?: components.Location$.Inbound | undefined;
  };

  export const inboundSchema: z.ZodType<
    LocationReadResponse,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      ContentType: z.string(),
      StatusCode: z.number().int(),
      RawResponse: z.instanceof(Response),
      Location: components.Location$.inboundSchema.optional(),
    })
    .transform((v) => {
      return {
        contentType: v.ContentType,
        statusCode: v.StatusCode,
        rawResponse: v.RawResponse,
        ...(v.Location === undefined ? null : { location: v.Location }),
      };
    });

  export type Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Location?: components.Location$.Outbound | undefined;
  };

  export const outboundSchema: z.ZodType<
    Outbound,
    z.ZodTypeDef,
    LocationReadResponse
  > = z
    .object({
      contentType: z.string(),
      statusCode: z.number().int(),
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }),
      location: components.Location$.outboundSchema.optional(),
    })
    .transform((v) => {
      return {
        ContentType: v.contentType,
        StatusCode: v.statusCode,
        RawResponse: v.rawResponse,
        ...(v.location === undefined ? null : { Location: v.location }),
      };
    });
}