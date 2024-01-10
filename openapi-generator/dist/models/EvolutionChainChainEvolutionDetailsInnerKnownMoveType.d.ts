import { AbilityNamesInner } from '../models/AbilityNamesInner';
import { TypeDamageRelations } from '../models/TypeDamageRelations';
import { TypeGameIndicesInner } from '../models/TypeGameIndicesInner';
import { TypeGeneration } from '../models/TypeGeneration';
import { TypeMoveDamageClass } from '../models/TypeMoveDamageClass';
import { TypePokemonInner } from '../models/TypePokemonInner';
export declare class EvolutionChainChainEvolutionDetailsInnerKnownMoveType {
    'id'?: number;
    'name'?: string;
    'damageRelations'?: TypeDamageRelations;
    'gameIndices'?: Array<TypeGameIndicesInner>;
    'generation'?: TypeGeneration;
    'moveDamageClass'?: TypeMoveDamageClass;
    'names'?: Array<AbilityNamesInner>;
    'pokemon'?: Array<TypePokemonInner>;
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
