import { PokeathlonStatName } from '../models/PokeathlonStatName';
export declare class NatureStatChange {
    'maxChange'?: number;
    'pokeathlonStat'?: PokeathlonStatName;
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
