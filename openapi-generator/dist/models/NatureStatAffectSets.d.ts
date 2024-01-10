import { NatureStatAffect } from '../models/NatureStatAffect';
export declare class NatureStatAffectSets {
    'increase': Array<NatureStatAffect>;
    'decrease': Array<NatureStatAffect>;
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
