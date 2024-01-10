import { NamedAPIResource } from '../models/NamedAPIResource';
export declare class PokemonMoveVersionGroupDetailsInner {
    'levelLearnedAt': number;
    'moveLearnMethod': NamedAPIResource;
    'versionGroup': NamedAPIResource;
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
