import { NamedAPIResource } from '../models/NamedAPIResource';
export declare class PokemonStat {
    'stat'?: NamedAPIResource;
    'effort'?: number;
    'baseStat'?: number;
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
