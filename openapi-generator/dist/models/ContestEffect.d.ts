import { FlavorText } from '../models/FlavorText';
import { VerboseEffect } from '../models/VerboseEffect';
export declare class ContestEffect {
    'id': number;
    'appeal': number;
    'jam': number;
    'effectEntries': Array<VerboseEffect>;
    'flavorTextEntries': Array<FlavorText>;
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
