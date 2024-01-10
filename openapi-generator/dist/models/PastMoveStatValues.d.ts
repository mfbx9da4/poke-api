import { PastMoveStatValuesEffectEntriesInner } from '../models/PastMoveStatValuesEffectEntriesInner';
import { Type } from '../models/Type';
export declare class PastMoveStatValues {
    'accuracy': number;
    'effectChance'?: number;
    'power': number;
    'pp': number;
    'effectEntries'?: Array<PastMoveStatValuesEffectEntriesInner>;
    'type'?: Type;
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
