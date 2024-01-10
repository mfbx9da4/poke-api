import { FlavorText } from '../models/FlavorText';
import { ItemAttribute } from '../models/ItemAttribute';
import { ItemCategory } from '../models/ItemCategory';
import { ItemFlingEffect } from '../models/ItemFlingEffect';
import { VerboseEffect } from '../models/VerboseEffect';
export declare class EvolutionChainBabyTriggerItem {
    'id'?: number;
    'name'?: string;
    'cost'?: number;
    'flingPower'?: number;
    'effectEntries'?: Array<VerboseEffect>;
    'flavorTextEntries'?: Array<FlavorText>;
    'attributes'?: Array<ItemAttribute>;
    'category'?: ItemCategory;
    'flingEffect'?: ItemFlingEffect;
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
