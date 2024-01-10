import { BerryFlavor } from '../models/BerryFlavor';
export declare class BerryFlavorMap {
    'potency': number;
    'flavor': BerryFlavor;
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
