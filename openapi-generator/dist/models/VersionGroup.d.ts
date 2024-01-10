import { NamedAPIResource } from '../models/NamedAPIResource';
export declare class VersionGroup {
    'id': number;
    'name': string;
    'order': number;
    'generation': NamedAPIResource;
    'moveLearnMethods': Array<NamedAPIResource>;
    'pokedexes': Array<NamedAPIResource>;
    'regions': Array<NamedAPIResource>;
    'versions': Array<NamedAPIResource>;
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
