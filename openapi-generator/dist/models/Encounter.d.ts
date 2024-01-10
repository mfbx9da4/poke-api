import { EncounterConditionValue } from '../models/EncounterConditionValue';
import { EncounterMethod } from '../models/EncounterMethod';
export declare class Encounter {
    'minLevel': number;
    'maxLevel': number;
    'conditionValues'?: Array<EncounterConditionValue>;
    'chance'?: number;
    'method': EncounterMethod;
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
