import { GenerationAbilitiesInner } from '../models/GenerationAbilitiesInner';
import { GenerationNamesInner } from '../models/GenerationNamesInner';
export declare class Generation {
    'id'?: number;
    'name'?: string;
    'abilities'?: Array<GenerationAbilitiesInner>;
    'names'?: Array<GenerationNamesInner>;
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
