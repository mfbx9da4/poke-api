import { BerryFlavorMap } from '../models/BerryFlavorMap';
export declare class BerryFlavor {
    'id': number;
    'name': string;
    'berries'?: Array<BerryFlavorMap>;
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
