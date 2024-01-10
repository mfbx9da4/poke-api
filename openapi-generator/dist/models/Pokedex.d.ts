import { Description } from '../models/Description';
import { NamedAPIResource } from '../models/NamedAPIResource';
import { PokemonEntry } from '../models/PokemonEntry';
export declare class Pokedex {
    'id': number;
    'name': string;
    'isMainSeries': boolean;
    'descriptions': Array<Description>;
    'pokemonEntries': Array<PokemonEntry>;
    'region': NamedAPIResource;
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
