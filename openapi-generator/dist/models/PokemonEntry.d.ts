import { NamedAPIResource } from '../models/NamedAPIResource';
export declare class PokemonEntry {
    'entryNumber'?: number;
    'pokemonSpecies'?: NamedAPIResource;
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
