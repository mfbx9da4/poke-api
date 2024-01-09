/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import { z } from "zod";

export type MoveDamageClassReadRequest = {
  id: number;
};

export type MoveDamageClassReadResponse = {
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
  moveDamageClass?: components.MoveDamageClass | undefined;
};

/** @internal */
export namespace MoveDamageClassReadRequest$ {
  export type Inbound = {
    id: number;
  };

  export const inboundSchema: z.ZodType<
    MoveDamageClassReadRequest,
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
    MoveDamageClassReadRequest
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
export namespace MoveDamageClassReadResponse$ {
  export type Inbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: Response;
    MoveDamageClass?: components.MoveDamageClass$.Inbound | undefined;
  };

  export const inboundSchema: z.ZodType<
    MoveDamageClassReadResponse,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      ContentType: z.string(),
      StatusCode: z.number().int(),
      RawResponse: z.instanceof(Response),
      MoveDamageClass: components.MoveDamageClass$.inboundSchema.optional(),
    })
    .transform((v) => {
      return {
        contentType: v.ContentType,
        statusCode: v.StatusCode,
        rawResponse: v.RawResponse,
        ...(v.MoveDamageClass === undefined
          ? null
          : { moveDamageClass: v.MoveDamageClass }),
      };
    });

  export type Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    MoveDamageClass?: components.MoveDamageClass$.Outbound | undefined;
  };

  export const outboundSchema: z.ZodType<
    Outbound,
    z.ZodTypeDef,
    MoveDamageClassReadResponse
  > = z
    .object({
      contentType: z.string(),
      statusCode: z.number().int(),
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }),
      moveDamageClass: components.MoveDamageClass$.outboundSchema.optional(),
    })
    .transform((v) => {
      return {
        ContentType: v.contentType,
        StatusCode: v.statusCode,
        RawResponse: v.rawResponse,
        ...(v.moveDamageClass === undefined
          ? null
          : { MoveDamageClass: v.moveDamageClass }),
      };
    });
}
