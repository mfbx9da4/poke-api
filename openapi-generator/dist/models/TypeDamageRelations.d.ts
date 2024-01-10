import { TypeDamageRelationsDoubleDamageFromInner } from '../models/TypeDamageRelationsDoubleDamageFromInner';
export declare class TypeDamageRelations {
    'doubleDamageFrom'?: Array<TypeDamageRelationsDoubleDamageFromInner>;
    'doubleDamageTo'?: Array<TypeDamageRelationsDoubleDamageFromInner>;
    'halfDamageFrom'?: Array<TypeDamageRelationsDoubleDamageFromInner>;
    'halfDamageTo'?: Array<TypeDamageRelationsDoubleDamageFromInner>;
    'noDamageFrom'?: Array<TypeDamageRelationsDoubleDamageFromInner>;
    'noDamageTo'?: Array<TypeDamageRelationsDoubleDamageFromInner>;
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
