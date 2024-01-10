"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
const browserJsonHttp = (config) => {
    const { baseUrl } = config;
    const get = (path) => {
        return new Promise((resolve) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", `${baseUrl}${path}`);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    let data = xhr.responseText;
                    try {
                        data = JSON.parse(xhr.responseText);
                    }
                    catch (error) { }
                    resolve({ status: xhr.status, data });
                }
            };
            xhr.send();
        });
    };
    return {
        get,
    };
};
const nodeJsonHttp = (config) => {
    const https = require("https");
    const { baseUrl } = config;
    if (baseUrl.startsWith("http:")) {
        throw new Error("URLs must be HTTPS");
    }
    const get = (path) => {
        return new Promise((resolve) => {
            const request = https.request(`${baseUrl}${path}`, (res) => {
                let responseText = "";
                res.on("data", (chunk) => {
                    responseText += chunk;
                });
                res.on("end", () => {
                    let data = responseText;
                    try {
                        data = JSON.parse(data);
                    }
                    catch (error) { }
                    resolve({ status: res.statusCode || 0, data });
                });
            });
            request.on("error", (error) => resolve({ status: 500, data: error }));
            request.setHeader("Content-Type", "application/json");
            request.setHeader("Accept", "application/json");
            request.end();
        });
    };
    return {
        get,
    };
};
const isNode = typeof process !== "undefined" &&
    process.versions != null &&
    process.versions.node != null;
const baseUrl = "https://pokeapi.co/api/v2/";
exports.http = isNode
    ? nodeJsonHttp({ baseUrl })
    : browserJsonHttp({ baseUrl });
//# sourceMappingURL=http.js.map