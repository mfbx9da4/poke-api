import { Name } from '../models/Name';
import { NamedAPIResource } from '../models/NamedAPIResource';
export declare class EggGroup {
    'id': number;
    'name': string;
    'names': Array<Name>;
    'pokemonSpecies': Array<NamedAPIResource>;
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
