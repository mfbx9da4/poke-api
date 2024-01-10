import { EncounterMethod } from '../models/EncounterMethod';
import { EncounterVersionDetails } from '../models/EncounterVersionDetails';
export declare class EncounterMethodRate {
    'encounterMethod'?: EncounterMethod;
    'versionDetails'?: Array<EncounterVersionDetails>;
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
