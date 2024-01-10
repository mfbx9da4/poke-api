import { EvolutionChainChainEvolutionDetailsInnerItem } from '../models/EvolutionChainChainEvolutionDetailsInnerItem';
import { EvolutionChainChainEvolutionDetailsInnerKnownMove } from '../models/EvolutionChainChainEvolutionDetailsInnerKnownMove';
import { EvolutionChainChainEvolutionDetailsInnerKnownMoveType } from '../models/EvolutionChainChainEvolutionDetailsInnerKnownMoveType';
import { EvolutionChainChainEvolutionDetailsInnerLocation } from '../models/EvolutionChainChainEvolutionDetailsInnerLocation';
import { EvolutionChainChainEvolutionDetailsInnerPartySpecies } from '../models/EvolutionChainChainEvolutionDetailsInnerPartySpecies';
import { EvolutionTrigger } from '../models/EvolutionTrigger';
export declare class EvolutionChainChainEvolutionDetailsInner {
    'item'?: EvolutionChainChainEvolutionDetailsInnerItem;
    'trigger'?: EvolutionTrigger;
    'gender'?: number | null;
    'heldItem'?: EvolutionChainChainEvolutionDetailsInnerItem;
    'knownMove'?: EvolutionChainChainEvolutionDetailsInnerKnownMove;
    'knownMoveType'?: EvolutionChainChainEvolutionDetailsInnerKnownMoveType;
    'location'?: EvolutionChainChainEvolutionDetailsInnerLocation;
    'minLevel'?: number | null;
    'minHappiness'?: number | null;
    'minBeauty'?: number | null;
    'minAffection'?: number | null;
    'needsOverworldRain'?: boolean;
    'partySpecies'?: EvolutionChainChainEvolutionDetailsInnerPartySpecies;
    'partyType'?: EvolutionChainChainEvolutionDetailsInnerKnownMoveType;
    'relativePhysicalStats'?: number | null;
    'timeOfDay'?: EvolutionChainChainEvolutionDetailsInnerTimeOfDayEnum;
    'tradeSpecies'?: EvolutionChainChainEvolutionDetailsInnerPartySpecies;
    'turnUpsideDown'?: boolean;
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
export declare enum EvolutionChainChainEvolutionDetailsInnerTimeOfDayEnum {
    Day = "day",
    Night = "night"
}
