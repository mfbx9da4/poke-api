"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlavorText = void 0;
var FlavorText = (function () {
    function FlavorText() {
    }
    FlavorText.getAttributeTypeMap = function () {
        return FlavorText.attributeTypeMap;
    };
    FlavorText.discriminator = undefined;
    FlavorText.attributeTypeMap = [
        {
            "name": "flavorText",
            "baseName": "flavor_text",
            "type": "string",
            "format": ""
        },
        {
            "name": "language",
            "baseName": "language",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "version",
            "baseName": "version",
            "type": "NamedAPIResource",
            "format": ""
        }
    ];
    return FlavorText;
}());
exports.FlavorText = FlavorText;
//# sourceMappingURL=FlavorText.js.map