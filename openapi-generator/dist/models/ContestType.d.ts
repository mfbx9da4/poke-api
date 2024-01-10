import { BerryFlavor } from '../models/BerryFlavor';
import { ContestName } from '../models/ContestName';
export declare class ContestType {
    'id': number;
    'name': string;
    'berryFlavor': BerryFlavor;
    'names': Array<ContestName>;
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
