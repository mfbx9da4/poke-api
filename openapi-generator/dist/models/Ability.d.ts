import { AbilityGeneration } from '../models/AbilityGeneration';
import { AbilityNamesInner } from '../models/AbilityNamesInner';
export declare class Ability {
    'id'?: number;
    'name'?: string;
    'isMainSeries'?: boolean;
    'generation'?: AbilityGeneration;
    'names'?: Array<AbilityNamesInner>;
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
