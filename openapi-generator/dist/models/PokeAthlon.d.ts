import { PokeathlonStatName } from '../models/PokeathlonStatName';
export declare class PokeAthlon {
    'id': number;
    'name': string;
    'names': Array<PokeathlonStatName>;
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
