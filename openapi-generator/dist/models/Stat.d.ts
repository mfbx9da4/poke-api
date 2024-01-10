import { MoveStatAffectSets } from '../models/MoveStatAffectSets';
import { NatureStatAffectSets } from '../models/NatureStatAffectSets';
export declare class Stat {
    'id': number;
    'name': string;
    'gameIndex': number;
    'isBattleOnly'?: boolean;
    'affectingMoves'?: MoveStatAffectSets;
    'affectingNatures'?: NatureStatAffectSets;
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
