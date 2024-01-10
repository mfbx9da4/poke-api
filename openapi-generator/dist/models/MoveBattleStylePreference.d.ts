import { NamedAPIResource } from '../models/NamedAPIResource';
export declare class MoveBattleStylePreference {
    'lowHpPreference': number;
    'highHpPreference': number;
    'moveBattleStyle': NamedAPIResource;
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
