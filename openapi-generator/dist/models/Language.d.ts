import { Name } from '../models/Name';
export declare class Language {
    'id'?: number;
    'name'?: string;
    'official'?: boolean;
    'iso639'?: string;
    'iso3166'?: string;
    'names'?: Array<Name>;
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
