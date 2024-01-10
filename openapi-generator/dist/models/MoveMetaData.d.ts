import { NamedAPIResource } from '../models/NamedAPIResource';
export declare class MoveMetaData {
    'ailment': NamedAPIResource;
    'category': NamedAPIResource;
    'minHits'?: number | null;
    'maxHits'?: number | null;
    'minTurns'?: number | null;
    'maxTurns'?: number | null;
    'drain'?: number | null;
    'healing'?: number | null;
    'critRate'?: number | null;
    'ailmentChance'?: number | null;
    'flinchChance'?: number | null;
    'statChance'?: number | null;
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
