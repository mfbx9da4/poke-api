import { NamedAPIResource } from '../models/NamedAPIResource';
import { PokemonMoveVersionGroupDetailsInner } from '../models/PokemonMoveVersionGroupDetailsInner';
export declare class PokemonMove {
    'move'?: NamedAPIResource;
    'versionGroupDetails'?: Array<PokemonMoveVersionGroupDetailsInner>;
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
