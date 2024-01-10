import { Description } from '../models/Description';
export declare class MoveDamageClass {
    'id': number;
    'name': string;
    'descriptions': Array<Description>;
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
