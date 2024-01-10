import { EncounterVersionDetails } from '../models/EncounterVersionDetails';
import { NamedAPIResource } from '../models/NamedAPIResource';
export declare class PokemonEncounter {
    'pokemon'?: NamedAPIResource;
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
