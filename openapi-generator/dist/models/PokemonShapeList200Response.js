"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonShapeList200Response = void 0;
var PokemonShapeList200Response = (function () {
    function PokemonShapeList200Response() {
    }
    PokemonShapeList200Response.getAttributeTypeMap = function () {
        return PokemonShapeList200Response.attributeTypeMap;
    };
    PokemonShapeList200Response.discriminator = undefined;
    PokemonShapeList200Response.attributeTypeMap = [
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
            "type": "Array<PokemonShape>",
            "format": ""
        }
    ];
    return PokemonShapeList200Response;
}());
exports.PokemonShapeList200Response = PokemonShapeList200Response;
//# sourceMappingURL=PokemonShapeList200Response.js.map