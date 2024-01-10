import { AbilityEffectChange } from '../models/AbilityEffectChange';
import { ContestComboSets } from '../models/ContestComboSets';
import { ContestType } from '../models/ContestType';
import { EffectEffect } from '../models/EffectEffect';
import { FlavorText } from '../models/FlavorText';
import { Generation } from '../models/Generation';
import { MachineVersionDetail } from '../models/MachineVersionDetail';
import { MoveMetaData } from '../models/MoveMetaData';
import { MoveStatChange } from '../models/MoveStatChange';
import { PokemonSpecies } from '../models/PokemonSpecies';
import { SuperContestEffect } from '../models/SuperContestEffect';
export declare class Effect {
    'id'?: number;
    'name'?: string;
    'effectEntries'?: Array<EffectEffect>;
    'pokemonFlavorTextEntries'?: Array<EffectEffect>;
    'targetSpecies'?: PokemonSpecies;
    'effectChanges'?: Array<AbilityEffectChange>;
    'flavorTextEntries'?: Array<FlavorText>;
    'generation'?: Generation;
    'machines'?: Array<MachineVersionDetail>;
    'meta'?: MoveMetaData;
    'shortEffect'?: string;
    'effectChance'?: number;
    'statChanges'?: Array<MoveStatChange>;
    'superContestEffect'?: SuperContestEffect;
    'contestCombos'?: ContestComboSets;
    'contestType'?: ContestType;
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
