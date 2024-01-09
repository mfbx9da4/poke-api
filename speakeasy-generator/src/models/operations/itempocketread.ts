/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../components";
import { z } from "zod";

export type ItemPocketReadRequest = {
  id: number;
};

export type ItemPocketReadResponse = {
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
  itemPocket?: components.ItemPocket | undefined;
};

/** @internal */
export namespace ItemPocketReadRequest$ {
  export type Inbound = {
    id: number;
  };

  export const inboundSchema: z.ZodType<
    ItemPocketReadRequest,
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
    ItemPocketReadRequest
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
export namespace ItemPocketReadResponse$ {
  export type Inbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: Response;
    ItemPocket?: components.ItemPocket$.Inbound | undefined;
  };

  export const inboundSchema: z.ZodType<
    ItemPocketReadResponse,
    z.ZodTypeDef,
    Inbound
  > = z
    .object({
      ContentType: z.string(),
      StatusCode: z.number().int(),
      RawResponse: z.instanceof(Response),
      ItemPocket: components.ItemPocket$.inboundSchema.optional(),
    })
    .transform((v) => {
      return {
        contentType: v.ContentType,
        statusCode: v.StatusCode,
        rawResponse: v.RawResponse,
        ...(v.ItemPocket === undefined ? null : { itemPocket: v.ItemPocket }),
      };
    });

  export type Outbound = {
    ContentType: string;
    StatusCode: number;
    RawResponse: never;
    ItemPocket?: components.ItemPocket$.Outbound | undefined;
  };

  export const outboundSchema: z.ZodType<
    Outbound,
    z.ZodTypeDef,
    ItemPocketReadResponse
  > = z
    .object({
      contentType: z.string(),
      statusCode: z.number().int(),
      rawResponse: z.instanceof(Response).transform(() => {
        throw new Error("Response cannot be serialized");
      }),
      itemPocket: components.ItemPocket$.outboundSchema.optional(),
    })
    .transform((v) => {
      return {
        ContentType: v.contentType,
        StatusCode: v.statusCode,
        RawResponse: v.rawResponse,
        ...(v.itemPocket === undefined ? null : { ItemPocket: v.itemPocket }),
      };
    });
}