import { NamedAPIResource } from '../models/NamedAPIResource';
import { VerboseEffect } from '../models/VerboseEffect';
export declare class PastMoveStatValuesEffectEntriesInner {
    'effect'?: VerboseEffect;
    'versionGroup'?: NamedAPIResource;
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
