import { Name } from '../models/Name';
import { PokeathlonStatAffectingNatures } from '../models/PokeathlonStatAffectingNatures';
export declare class PokeathlonStat {
    'id': number;
    'name': string;
    'names': Array<Name>;
    'affectingNatures': PokeathlonStatAffectingNatures;
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
