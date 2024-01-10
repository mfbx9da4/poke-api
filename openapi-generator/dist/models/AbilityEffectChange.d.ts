import { Effect } from '../models/Effect';
import { NamedAPIResource } from '../models/NamedAPIResource';
export declare class AbilityEffectChange {
    'effectEntries': Array<Effect>;
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
