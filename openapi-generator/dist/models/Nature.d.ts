import { MoveBattleStylePreference } from '../models/MoveBattleStylePreference';
import { NatureStatChange } from '../models/NatureStatChange';
export declare class Nature {
    'id': number;
    'name': string;
    'decreasedStat': string;
    'increasedStat': string;
    'hatesFlavor': string;
    'likesFlavor': string;
    'pokeathlonStatChanges'?: Array<NatureStatChange>;
    'moveBattleStylePreferences'?: Array<MoveBattleStylePreference>;
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
