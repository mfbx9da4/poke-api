import { PokeathlonStatAffect } from '../models/PokeathlonStatAffect';
export declare class NaturePokeathlonStatAffectSets {
    'increase': Array<PokeathlonStatAffect>;
    'decrease': Array<PokeathlonStatAffect>;
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
