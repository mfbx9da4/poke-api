import { Ability } from '../models/Ability';
export declare class AbilityList200Response {
    'count'?: number;
    'next'?: string;
    'previous'?: string;
    'results'?: Array<Ability>;
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
