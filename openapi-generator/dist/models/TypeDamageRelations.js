"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeDamageRelations = void 0;
var TypeDamageRelations = (function () {
    function TypeDamageRelations() {
    }
    TypeDamageRelations.getAttributeTypeMap = function () {
        return TypeDamageRelations.attributeTypeMap;
    };
    TypeDamageRelations.discriminator = undefined;
    TypeDamageRelations.attributeTypeMap = [
        {
            "name": "doubleDamageFrom",
            "baseName": "double_damage_from",
            "type": "Array<TypeDamageRelationsDoubleDamageFromInner>",
            "format": ""
        },
        {
            "name": "doubleDamageTo",
            "baseName": "double_damage_to",
            "type": "Array<TypeDamageRelationsDoubleDamageFromInner>",
            "format": ""
        },
        {
            "name": "halfDamageFrom",
            "baseName": "half_damage_from",
            "type": "Array<TypeDamageRelationsDoubleDamageFromInner>",
            "format": ""
        },
        {
            "name": "halfDamageTo",
            "baseName": "half_damage_to",
            "type": "Array<TypeDamageRelationsDoubleDamageFromInner>",
            "format": ""
        },
        {
            "name": "noDamageFrom",
            "baseName": "no_damage_from",
            "type": "Array<TypeDamageRelationsDoubleDamageFromInner>",
            "format": ""
        },
        {
            "name": "noDamageTo",
            "baseName": "no_damage_to",
            "type": "Array<TypeDamageRelationsDoubleDamageFromInner>",
            "format": ""
        }
    ];
    return TypeDamageRelations;
}());
exports.TypeDamageRelations = TypeDamageRelations;
//# sourceMappingURL=TypeDamageRelations.js.map