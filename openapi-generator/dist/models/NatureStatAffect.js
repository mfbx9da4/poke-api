"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NatureStatAffect = void 0;
var NatureStatAffect = (function () {
    function NatureStatAffect() {
    }
    NatureStatAffect.getAttributeTypeMap = function () {
        return NatureStatAffect.attributeTypeMap;
    };
    NatureStatAffect.discriminator = undefined;
    NatureStatAffect.attributeTypeMap = [
        {
            "name": "increase",
            "baseName": "increase",
            "type": "Array<Nature>",
            "format": ""
        },
        {
            "name": "decrease",
            "baseName": "decrease",
            "type": "Array<Nature>",
            "format": ""
        }
    ];
    return NatureStatAffect;
}());
exports.NatureStatAffect = NatureStatAffect;
//# sourceMappingURL=NatureStatAffect.js.map