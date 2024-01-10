import { BerryFirmness } from '../models/BerryFirmness';
import { BerryFlavorMap } from '../models/BerryFlavorMap';
export declare class Berry {
    'id': number;
    'name': string;
    'growthTime': number;
    'maxHarvest': number;
    'naturalGiftPower': number;
    'size': number;
    'smoothness': number;
    'soilDryness': number;
    'firmness': BerryFirmness;
    'flavors': Array<BerryFlavorMap>;
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
