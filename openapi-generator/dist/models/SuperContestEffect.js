"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperContestEffect = void 0;
var SuperContestEffect = (function () {
    function SuperContestEffect() {
    }
    SuperContestEffect.getAttributeTypeMap = function () {
        return SuperContestEffect.attributeTypeMap;
    };
    SuperContestEffect.discriminator = undefined;
    SuperContestEffect.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "appeal",
            "baseName": "appeal",
            "type": "number",
            "format": "int32"
        },
        {
            "name": "flavorTextEntries",
            "baseName": "flavor_text_entries",
            "type": "Array<FlavorText>",
            "format": ""
        },
        {
            "name": "moves",
            "baseName": "moves",
            "type": "Array<NamedAPIResource>",
            "format": ""
        }
    ];
    return SuperContestEffect;
}());
exports.SuperContestEffect = SuperContestEffect;
//# sourceMappingURL=SuperContestEffect.js.map