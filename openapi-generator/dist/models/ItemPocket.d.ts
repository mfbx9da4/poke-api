import { ItemCategory } from '../models/ItemCategory';
export declare class ItemPocket {
    'id'?: number;
    'name'?: string;
    'categories'?: Array<ItemCategory>;
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
