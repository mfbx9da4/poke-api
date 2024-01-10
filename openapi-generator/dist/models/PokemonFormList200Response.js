"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonFormList200Response = void 0;
var PokemonFormList200Response = (function () {
    function PokemonFormList200Response() {
    }
    PokemonFormList200Response.getAttributeTypeMap = function () {
        return PokemonFormList200Response.attributeTypeMap;
    };
    PokemonFormList200Response.discriminator = undefined;
    PokemonFormList200Response.attributeTypeMap = [
        {
            "name": "count",
            "baseName": "count",
            "type": "number",
            "format": ""
        },
        {
            "name": "next",
            "baseName": "next",
            "type": "string",
            "format": ""
        },
        {
            "name": "previous",
            "baseName": "previous",
            "type": "string",
            "format": ""
        },
        {
            "name": "results",
            "baseName": "results",
            "type": "Array<PokemonForm>",
            "format": ""
        }
    ];
    return PokemonFormList200Response;
}());
exports.PokemonFormList200Response = PokemonFormList200Response;
//# sourceMappingURL=PokemonFormList200Response.js.map