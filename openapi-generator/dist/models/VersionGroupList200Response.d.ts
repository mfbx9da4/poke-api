import { VersionGroup } from '../models/VersionGroup';
export declare class VersionGroupList200Response {
    'count'?: number;
    'next'?: string | null;
    'previous'?: string | null;
    'results'?: Array<VersionGroup>;
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
