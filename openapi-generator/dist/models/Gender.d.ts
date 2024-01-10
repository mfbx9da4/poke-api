import { GenderPokemonSpeciesDetailsInner } from '../models/GenderPokemonSpeciesDetailsInner';
export declare class Gender {
    'id'?: number;
    'name'?: string;
    'pokemonSpeciesDetails'?: Array<GenderPokemonSpeciesDetailsInner>;
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
