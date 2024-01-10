"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionGroupList200Response = void 0;
var VersionGroupList200Response = (function () {
    function VersionGroupList200Response() {
    }
    VersionGroupList200Response.getAttributeTypeMap = function () {
        return VersionGroupList200Response.attributeTypeMap;
    };
    VersionGroupList200Response.discriminator = undefined;
    VersionGroupList200Response.attributeTypeMap = [
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
            "type": "Array<VersionGroup>",
            "format": ""
        }
    ];
    return VersionGroupList200Response;
}());
exports.VersionGroupList200Response = VersionGroupList200Response;
//# sourceMappingURL=VersionGroupList200Response.js.map