/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import { z } from "zod";

export type CharacteristicReadRequest = {
  id: number;
};

export type CharacteristicReadResponse = {
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
  characteristic?: components.Characteristic | undefined;
};

/** @internal */
export namespace CharacteristicReadRequest$ {
  export type Inbound = {
    id: number;
  };

  export const inboundSchema: z.ZodType<
    CharacteristicReadRequest,
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
    CharacteristicReadRequest
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
export namespace CharacteristicReadResponse$ {
  export type Inbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: Response;
    Characteristic?: components.Characteristic$.Inbound | undefined;
  };

  export const inboundSchema: z.ZodType<
    CharacteristicReadResponse,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      ContentType: z.string(),
      StatusCode: z.number().int(),
      RawResponse: z.instanceof(Response),
      Characteristic: components.Characteristic$.inboundSchema.optional(),
    })
    .transform((v) => {
      return {
        contentType: v.ContentType,
        statusCode: v.StatusCode,
        rawResponse: v.RawResponse,
        ...(v.Characteristic === undefined
          ? null
          : { characteristic: v.Characteristic }),
      };
    });

  export type Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    Characteristic?: components.Characteristic$.Outbound | undefined;
  };

  export const outboundSchema: z.ZodType<
    Outbound,
    z.ZodTypeDef,
    CharacteristicReadResponse
  > = z
    .object({
      contentType: z.string(),
      statusCode: z.number().int(),
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }),
      characteristic: components.Characteristic$.outboundSchema.optional(),
    })
    .transform((v) => {
      return {
        ContentType: v.contentType,
        StatusCode: v.statusCode,
        RawResponse: v.rawResponse,
        ...(v.characteristic === undefined
          ? null
          : { Characteristic: v.characteristic }),
      };
    });
}