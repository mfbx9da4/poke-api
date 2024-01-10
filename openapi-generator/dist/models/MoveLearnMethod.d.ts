import { Description } from '../models/Description';
import { Name } from '../models/Name';
export declare class MoveLearnMethod {
    'id': number;
    'name': string;
    'descriptions'?: Array<Description>;
    'names'?: Array<Name>;
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
