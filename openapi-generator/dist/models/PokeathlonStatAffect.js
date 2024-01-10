"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokeathlonStatAffect = void 0;
var PokeathlonStatAffect = (function () {
    function PokeathlonStatAffect() {
    }
    PokeathlonStatAffect.getAttributeTypeMap = function () {
        return PokeathlonStatAffect.attributeTypeMap;
    };
    PokeathlonStatAffect.discriminator = undefined;
    PokeathlonStatAffect.attributeTypeMap = [
        {
            "name": "maxChange",
            "baseName": "max_change",
            "type": "number",
            "format": ""
        },
        {
            "name": "nature",
            "baseName": "nature",
            "type": "Nature",
            "format": ""
        }
    ];
    return PokeathlonStatAffect;
}());
exports.PokeathlonStatAffect = PokeathlonStatAffect;
//# sourceMappingURL=PokeathlonStatAffect.js.map