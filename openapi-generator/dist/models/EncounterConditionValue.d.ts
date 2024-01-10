import { Name } from '../models/Name';
import { NamedAPIResource } from '../models/NamedAPIResource';
export declare class EncounterConditionValue {
    'id': number;
    'name': string;
    'condition': NamedAPIResource;
    'names': Array<Name>;
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
