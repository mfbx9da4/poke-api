import { BerryFlavor } from '../models/BerryFlavor';
export declare class BerryFlavorList200Response {
    'count'?: number;
    'next'?: string;
    'previous'?: string;
    'results'?: Array<BerryFlavor>;
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
