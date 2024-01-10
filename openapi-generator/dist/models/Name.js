"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Name = void 0;
var Name = (function () {
    function Name() {
    }
    Name.getAttributeTypeMap = function () {
        return Name.attributeTypeMap;
    };
    Name.discriminator = undefined;
    Name.attributeTypeMap = [
        {
            "name": "language",
            "baseName": "language",
            "type": "NamedAPIResource",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        }
    ];
    return Name;
}());
exports.Name = Name;
//# sourceMappingURL=Name.js.map