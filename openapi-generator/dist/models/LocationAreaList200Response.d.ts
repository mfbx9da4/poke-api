import { LocationArea } from '../models/LocationArea';
export declare class LocationAreaList200Response {
    'count'?: number;
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<LocationArea>;
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
