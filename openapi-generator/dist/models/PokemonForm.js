"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonForm = void 0;
var PokemonForm = (function () {
    function PokemonForm() {
    }
    PokemonForm.getAttributeTypeMap = function () {
        return PokemonForm.attributeTypeMap;
    };
    PokemonForm.discriminator = undefined;
    PokemonForm.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    return PokemonForm;
}());
exports.PokemonForm = PokemonForm;
//# sourceMappingURL=PokemonForm.js.map