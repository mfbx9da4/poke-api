"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VersionList200Response = void 0;
var VersionList200Response = (function () {
    function VersionList200Response() {
    }
    VersionList200Response.getAttributeTypeMap = function () {
        return VersionList200Response.attributeTypeMap;
    };
    VersionList200Response.discriminator = undefined;
    VersionList200Response.attributeTypeMap = [
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
            "type": "Array<Version>",
            "format": ""
        }
    ];
    return VersionList200Response;
}());
exports.VersionList200Response = VersionList200Response;
//# sourceMappingURL=VersionList200Response.js.map