/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { Language, Language$ } from "./language";
import { z } from "zod";

export type Abilities = {
    /**
     * The name of this ability
     */
    name?: string | undefined;
    /**
     * Whether or not this ability is a hidden one
     */
    isHidden?: boolean | undefined;
    /**
     * The slot this ability occupies in this Pokémon species
     */
    slot?: number | undefined;
};

export type GenerationNames = {
    /**
     * The localized name for an API resource in a specific language
     */
    name?: string | undefined;
    language?: Language | undefined;
};

export type Generation = {
    /**
     * The identifier for this generation resource
     */
    id?: number | undefined;
    /**
     * The name for this generation resource
     */
    name?: string | undefined;
    abilities?: Array<Abilities> | undefined;
    names?: Array<GenerationNames> | undefined;
};

/** @internal */
export namespace Abilities$ {
    export type Inbound = {
        name?: string | undefined;
        is_hidden?: boolean | undefined;
        slot?: number | undefined;
    };

    export const inboundSchema: z.ZodType<Abilities, z.ZodTypeDef, Inbound> = z
        .object({
            name: z.string().optional(),
            is_hidden: z.boolean().optional(),
            slot: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.is_hidden === undefined ? null : { isHidden: v.is_hidden }),
                ...(v.slot === undefined ? null : { slot: v.slot }),
            };
        });

    export type Outbound = {
        name?: string | undefined;
        is_hidden?: boolean | undefined;
        slot?: number | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Abilities> = z
        .object({
            name: z.string().optional(),
            isHidden: z.boolean().optional(),
            slot: z.number().int().optional(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.isHidden === undefined ? null : { is_hidden: v.isHidden }),
                ...(v.slot === undefined ? null : { slot: v.slot }),
            };
        });
}

/** @internal */
export namespace GenerationNames$ {
    export type Inbound = {
        name?: string | undefined;
        language?: Language$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GenerationNames, z.ZodTypeDef, Inbound> = z
        .object({
            name: z.string().optional(),
            language: Language$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.language === undefined ? null : { language: v.language }),
            };
        });

    export type Outbound = {
        name?: string | undefined;
        language?: Language$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GenerationNames> = z
        .object({
            name: z.string().optional(),
            language: Language$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.language === undefined ? null : { language: v.language }),
            };
        });
}

/** @internal */
export namespace Generation$ {
    export type Inbound = {
        id?: number | undefined;
        name?: string | undefined;
        abilities?: Array<Abilities$.Inbound> | undefined;
        names?: Array<GenerationNames$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<Generation, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.number().int().optional(),
            name: z.string().optional(),
            abilities: z.array(z.lazy(() => Abilities$.inboundSchema)).optional(),
            names: z.array(z.lazy(() => GenerationNames$.inboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.abilities === undefined ? null : { abilities: v.abilities }),
                ...(v.names === undefined ? null : { names: v.names }),
            };
        });

    export type Outbound = {
        id?: number | undefined;
        name?: string | undefined;
        abilities?: Array<Abilities$.Outbound> | undefined;
        names?: Array<GenerationNames$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Generation> = z
        .object({
            id: z.number().int().optional(),
            name: z.string().optional(),
            abilities: z.array(z.lazy(() => Abilities$.outboundSchema)).optional(),
            names: z.array(z.lazy(() => GenerationNames$.outboundSchema)).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.abilities === undefined ? null : { abilities: v.abilities }),
                ...(v.names === undefined ? null : { names: v.names }),
            };
        });
}
