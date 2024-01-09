/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { AbilityEffectChange, AbilityEffectChange$ } from "./abilityeffectchange";
import { ContestComboSets, ContestComboSets$ } from "./contestcombosets";
import { ContestType, ContestType$ } from "./contesttype";
import { EffectEffect, EffectEffect$ } from "./effecteffect";
import { FlavorText, FlavorText$ } from "./flavortext";
import { Generation, Generation$ } from "./generation";
import { MachineVersionDetail, MachineVersionDetail$ } from "./machineversiondetail";
import { MoveMetaData, MoveMetaData$ } from "./movemetadata";
import { MoveStatChange, MoveStatChange$ } from "./movestatchange";
import { PokemonSpecies, PokemonSpecies$ } from "./pokemonspecies";
import { SuperContestEffect, SuperContestEffect$ } from "./supercontesteffect";
import { z } from "zod";

/**
 * An effect that occurs in a game, e.g. causing a Pokémon to fall asleep.
 */
export type Effect = {
    /**
     * The identifier for this effect resource
     */
    id?: number | undefined;
    /**
     * The name for this effect resource
     */
    name?: string | undefined;
    /**
     * The list of effect text entries
     */
    effectEntries?: Array<EffectEffect> | undefined;
    /**
     * The flavor text entries that describe this effect
     */
    pokemonFlavorTextEntries?: Array<EffectEffect> | undefined;
    targetSpecies?: PokemonSpecies | undefined;
    /**
     * The list of effects that are changed by this ability
     */
    effectChanges?: Array<AbilityEffectChange> | undefined;
    /**
     * The flavor text entries that describe this effect
     */
    flavorTextEntries?: Array<FlavorText> | undefined;
    generation?: Generation | undefined;
    /**
     * The machines that teach this move
     */
    machines?: Array<MachineVersionDetail> | undefined;
    meta?: MoveMetaData | undefined;
    /**
     * The short description of this effect listed in different languages
     */
    shortEffect?: string | undefined;
    /**
     * The chance of this move having an additional effect listed in percentage
     */
    effectChance?: number | undefined;
    /**
     * The list of stat changes that are caused by this effect
     */
    statChanges?: Array<MoveStatChange> | undefined;
    superContestEffect?: SuperContestEffect | undefined;
    contestCombos?: ContestComboSets | undefined;
    contestType?: ContestType | undefined;
};

/** @internal */
export namespace Effect$ {
    export type Inbound = {
        id?: number | undefined;
        name?: string | undefined;
        effect_entries?: Array<EffectEffect$.Inbound> | undefined;
        pokemon_flavor_text_entries?: Array<EffectEffect$.Inbound> | undefined;
        target_species?: PokemonSpecies$.Inbound | undefined;
        effect_changes?: Array<AbilityEffectChange$.Inbound> | undefined;
        flavor_text_entries?: Array<FlavorText$.Inbound> | undefined;
        generation?: Generation$.Inbound | undefined;
        machines?: Array<MachineVersionDetail$.Inbound> | undefined;
        meta?: MoveMetaData$.Inbound | undefined;
        short_effect?: string | undefined;
        effect_chance?: number | undefined;
        stat_changes?: Array<MoveStatChange$.Inbound> | undefined;
        super_contest_effect?: SuperContestEffect$.Inbound | undefined;
        contest_combos?: ContestComboSets$.Inbound | undefined;
        contest_type?: ContestType$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<Effect, z.ZodTypeDef, Inbound> = z
        .object({
            id: z.number().int().optional(),
            name: z.string().optional(),
            effect_entries: z.array(EffectEffect$.inboundSchema).optional(),
            pokemon_flavor_text_entries: z.array(EffectEffect$.inboundSchema).optional(),
            target_species: PokemonSpecies$.inboundSchema.optional(),
            effect_changes: z.array(AbilityEffectChange$.inboundSchema).optional(),
            flavor_text_entries: z.array(FlavorText$.inboundSchema).optional(),
            generation: Generation$.inboundSchema.optional(),
            machines: z.array(MachineVersionDetail$.inboundSchema).optional(),
            meta: MoveMetaData$.inboundSchema.optional(),
            short_effect: z.string().optional(),
            effect_chance: z.number().int().optional(),
            stat_changes: z.array(MoveStatChange$.inboundSchema).optional(),
            super_contest_effect: SuperContestEffect$.inboundSchema.optional(),
            contest_combos: ContestComboSets$.inboundSchema.optional(),
            contest_type: ContestType$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.effect_entries === undefined ? null : { effectEntries: v.effect_entries }),
                ...(v.pokemon_flavor_text_entries === undefined
                    ? null
                    : { pokemonFlavorTextEntries: v.pokemon_flavor_text_entries }),
                ...(v.target_species === undefined ? null : { targetSpecies: v.target_species }),
                ...(v.effect_changes === undefined ? null : { effectChanges: v.effect_changes }),
                ...(v.flavor_text_entries === undefined
                    ? null
                    : { flavorTextEntries: v.flavor_text_entries }),
                ...(v.generation === undefined ? null : { generation: v.generation }),
                ...(v.machines === undefined ? null : { machines: v.machines }),
                ...(v.meta === undefined ? null : { meta: v.meta }),
                ...(v.short_effect === undefined ? null : { shortEffect: v.short_effect }),
                ...(v.effect_chance === undefined ? null : { effectChance: v.effect_chance }),
                ...(v.stat_changes === undefined ? null : { statChanges: v.stat_changes }),
                ...(v.super_contest_effect === undefined
                    ? null
                    : { superContestEffect: v.super_contest_effect }),
                ...(v.contest_combos === undefined ? null : { contestCombos: v.contest_combos }),
                ...(v.contest_type === undefined ? null : { contestType: v.contest_type }),
            };
        });

    export type Outbound = {
        id?: number | undefined;
        name?: string | undefined;
        effect_entries?: Array<EffectEffect$.Outbound> | undefined;
        pokemon_flavor_text_entries?: Array<EffectEffect$.Outbound> | undefined;
        target_species?: PokemonSpecies$.Outbound | undefined;
        effect_changes?: Array<AbilityEffectChange$.Outbound> | undefined;
        flavor_text_entries?: Array<FlavorText$.Outbound> | undefined;
        generation?: Generation$.Outbound | undefined;
        machines?: Array<MachineVersionDetail$.Outbound> | undefined;
        meta?: MoveMetaData$.Outbound | undefined;
        short_effect?: string | undefined;
        effect_chance?: number | undefined;
        stat_changes?: Array<MoveStatChange$.Outbound> | undefined;
        super_contest_effect?: SuperContestEffect$.Outbound | undefined;
        contest_combos?: ContestComboSets$.Outbound | undefined;
        contest_type?: ContestType$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Effect> = z
        .object({
            id: z.number().int().optional(),
            name: z.string().optional(),
            effectEntries: z.array(EffectEffect$.outboundSchema).optional(),
            pokemonFlavorTextEntries: z.array(EffectEffect$.outboundSchema).optional(),
            targetSpecies: PokemonSpecies$.outboundSchema.optional(),
            effectChanges: z.array(AbilityEffectChange$.outboundSchema).optional(),
            flavorTextEntries: z.array(FlavorText$.outboundSchema).optional(),
            generation: Generation$.outboundSchema.optional(),
            machines: z.array(MachineVersionDetail$.outboundSchema).optional(),
            meta: MoveMetaData$.outboundSchema.optional(),
            shortEffect: z.string().optional(),
            effectChance: z.number().int().optional(),
            statChanges: z.array(MoveStatChange$.outboundSchema).optional(),
            superContestEffect: SuperContestEffect$.outboundSchema.optional(),
            contestCombos: ContestComboSets$.outboundSchema.optional(),
            contestType: ContestType$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.effectEntries === undefined ? null : { effect_entries: v.effectEntries }),
                ...(v.pokemonFlavorTextEntries === undefined
                    ? null
                    : { pokemon_flavor_text_entries: v.pokemonFlavorTextEntries }),
                ...(v.targetSpecies === undefined ? null : { target_species: v.targetSpecies }),
                ...(v.effectChanges === undefined ? null : { effect_changes: v.effectChanges }),
                ...(v.flavorTextEntries === undefined
                    ? null
                    : { flavor_text_entries: v.flavorTextEntries }),
                ...(v.generation === undefined ? null : { generation: v.generation }),
                ...(v.machines === undefined ? null : { machines: v.machines }),
                ...(v.meta === undefined ? null : { meta: v.meta }),
                ...(v.shortEffect === undefined ? null : { short_effect: v.shortEffect }),
                ...(v.effectChance === undefined ? null : { effect_chance: v.effectChance }),
                ...(v.statChanges === undefined ? null : { stat_changes: v.statChanges }),
                ...(v.superContestEffect === undefined
                    ? null
                    : { super_contest_effect: v.superContestEffect }),
                ...(v.contestCombos === undefined ? null : { contest_combos: v.contestCombos }),
                ...(v.contestType === undefined ? null : { contest_type: v.contestType }),
            };
        });
}