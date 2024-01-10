import { AbilityEffectChange } from '../models/AbilityEffectChange';
import { ContestComboSets } from '../models/ContestComboSets';
import { MoveContestEffect } from '../models/MoveContestEffect';
import { MoveContestType } from '../models/MoveContestType';
import { MoveMetaData } from '../models/MoveMetaData';
import { MoveStatChange } from '../models/MoveStatChange';
import { Name } from '../models/Name';
import { PastMoveStatValues } from '../models/PastMoveStatValues';
import { VerboseEffect } from '../models/VerboseEffect';
export declare class Move {
    'id': number;
    'name': string;
    'accuracy'?: number | null;
    'effectChance'?: number | null;
    'pp': number;
    'priority': number;
    'power'?: number | null;
    'contestCombos'?: ContestComboSets;
    'contestType'?: MoveContestType;
    'contestEffect'?: MoveContestEffect;
    'damageClass'?: MoveContestType;
    'effectEntries'?: Array<VerboseEffect>;
    'effectChanges'?: Array<AbilityEffectChange>;
    'generation': MoveContestType;
    'meta'?: MoveMetaData;
    'names'?: Array<Name>;
    'pastValues'?: Array<PastMoveStatValues>;
    'statChanges'?: Array<MoveStatChange>;
    'superContestEffect'?: MoveContestEffect;
    'target': MoveContestType;
    'type': MoveContestType;
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
