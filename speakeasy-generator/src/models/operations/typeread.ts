/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import { z } from "zod";

export type TypeReadRequest = {
  id: number;
};

export type TypeReadResponse = {
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
  type?: components.TypeT | undefined;
};

/** @internal */
export namespace TypeReadRequest$ {
  export type Inbound = {
    id: number;
  };

  export const inboundSchema: z.ZodType<
    TypeReadRequest,
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
    TypeReadRequest
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
export namespace TypeReadResponse$ {
  export type Inbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: Response;
    Type?: components.TypeT$.Inbound | undefined;
  };

  export const inboundSchema: z.ZodType<
    TypeReadResponse,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      ContentType: z.string(),
      StatusCode: z.number().int(),
      RawResponse: z.instanceof(Response),
      Type: components.TypeT$.inboundSchema.optional(),
    })
    .transform((v) => {
      return {
        contentType: v.ContentType,
        statusCode: v.StatusCode,
        rawResponse: v.RawResponse,
        ...(v.Type === undefined ? null : { type: v.Type }),
      };
    });

  export type Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Type?: components.TypeT$.Outbound | undefined;
  };

  export const outboundSchema: z.ZodType<
    Outbound,
    z.ZodTypeDef,
    TypeReadResponse
  > = z
    .object({
      contentType: z.string(),
      statusCode: z.number().int(),
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }),
      type: components.TypeT$.outboundSchema.optional(),
    })
    .transform((v) => {
      return {
        ContentType: v.contentType,
        StatusCode: v.statusCode,
        RawResponse: v.rawResponse,
        ...(v.type === undefined ? null : { Type: v.type }),
      };
    });
}