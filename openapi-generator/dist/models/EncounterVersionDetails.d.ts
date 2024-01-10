import { Encounter } from '../models/Encounter';
import { NamedAPIResource } from '../models/NamedAPIResource';
export declare class EncounterVersionDetails {
    'version'?: NamedAPIResource;
    'maxChance'?: number;
    'encounterDetails'?: Array<Encounter>;
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
