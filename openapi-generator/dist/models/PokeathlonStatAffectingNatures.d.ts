import { NaturePokeathlonStatAffectSets } from '../models/NaturePokeathlonStatAffectSets';
export declare class PokeathlonStatAffectingNatures {
    'increase'?: Array<NaturePokeathlonStatAffectSets>;
    'decrease'?: Array<NaturePokeathlonStatAffectSets>;
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
