import { Item } from '../models/Item';
import { PokemonHeldItemVersionDetailsInner } from '../models/PokemonHeldItemVersionDetailsInner';
export declare class PokemonHeldItem {
    'item'?: Item;
    'versionDetails'?: Array<PokemonHeldItemVersionDetailsInner>;
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
