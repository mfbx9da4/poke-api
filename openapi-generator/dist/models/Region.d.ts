import { Name } from '../models/Name';
import { NamedAPIResource } from '../models/NamedAPIResource';
export declare class Region {
    'id': number;
    'locations': Array<NamedAPIResource>;
    'name': string;
    'names': Array<Name>;
    'mainGeneration': NamedAPIResource;
    'pokedexes': Array<NamedAPIResource>;
    'versionGroups': Array<NamedAPIResource>;
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
