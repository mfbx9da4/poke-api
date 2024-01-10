import { MoveStatAffect } from '../models/MoveStatAffect';
export declare class MoveStatAffectSets {
    'increase': Array<MoveStatAffect>;
    'decrease': Array<MoveStatAffect>;
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
