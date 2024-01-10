import { Description } from '../models/Description';
export declare class GrowthRate {
    'id'?: number;
    'name'?: string;
    'formula'?: string;
    'descriptions'?: Array<Description>;
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
