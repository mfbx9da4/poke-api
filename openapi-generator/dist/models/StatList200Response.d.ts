import { Stat } from '../models/Stat';
export declare class StatList200Response {
    'count'?: number;
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<Stat>;
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
