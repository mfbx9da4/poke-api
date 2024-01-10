import { FlavorText } from '../models/FlavorText';
import { NamedAPIResource } from '../models/NamedAPIResource';
export declare class SuperContestEffect {
    'id': number;
    'appeal': number;
    'flavorTextEntries': Array<FlavorText>;
    'moves': Array<NamedAPIResource>;
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
