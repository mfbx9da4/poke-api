import { EncounterMethodRate } from '../models/EncounterMethodRate';
import { Location } from '../models/Location';
import { Name } from '../models/Name';
import { PokemonEncounter } from '../models/PokemonEncounter';
export declare class LocationArea {
    'id'?: number;
    'name'?: string;
    'gameIndex'?: number;
    'encounterMethodRates'?: Array<EncounterMethodRate>;
    'location'?: Location;
    'names'?: Array<Name>;
    'pokemonEncounters'?: Array<PokemonEncounter>;
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
