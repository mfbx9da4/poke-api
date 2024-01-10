"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoveMetaData = void 0;
var MoveMetaData = (function () {
    function MoveMetaData() {
    }
    MoveMetaData.getAttributeTypeMap = function () {
        return MoveMetaData.attributeTypeMap;
    };
    MoveMetaData.discriminator = undefined;
    MoveMetaData.attributeTypeMap = [
        {
            "name": "ailment",
            "baseName": "ailment",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "minHits",
            "baseName": "min_hits",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxHits",
            "baseName": "max_hits",
            "type": "number",
            "format": ""
        },
        {
            "name": "minTurns",
            "baseName": "min_turns",
            "type": "number",
            "format": ""
        },
        {
            "name": "maxTurns",
            "baseName": "max_turns",
            "type": "number",
            "format": ""
        },
        {
            "name": "drain",
            "baseName": "drain",
            "type": "number",
            "format": ""
        },
        {
            "name": "healing",
            "baseName": "healing",
            "type": "number",
            "format": ""
        },
        {
            "name": "critRate",
            "baseName": "crit_rate",
            "type": "number",
            "format": ""
        },
        {
            "name": "ailmentChance",
            "baseName": "ailment_chance",
            "type": "number",
            "format": ""
        },
        {
            "name": "flinchChance",
            "baseName": "flinch_chance",
            "type": "number",
            "format": ""
        },
        {
            "name": "statChance",
            "baseName": "stat_chance",
            "type": "number",
            "format": ""
        }
    ];
    return MoveMetaData;
}());
exports.MoveMetaData = MoveMetaData;
//# sourceMappingURL=MoveMetaData.js.map