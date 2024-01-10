import { Item } from '../models/Item';
import { VerboseEffect } from '../models/VerboseEffect';
export declare class ItemFlingEffect {
    'id'?: number;
    'name'?: string;
    'effectEntries'?: Array<VerboseEffect>;
    'items'?: Array<Item>;
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
