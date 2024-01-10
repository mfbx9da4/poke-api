import { Type } from '../models/Type';
export declare class TypeList200Response {
    'count'?: number;
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Type>;
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
