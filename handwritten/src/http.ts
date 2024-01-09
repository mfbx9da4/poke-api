export type JsonHttpResponse = {
  status: number;
  data: unknown;
};

export interface JsonHttpClient {
  get: (path: string) => Promise<JsonHttpResponse>;
}

export type JsonHttpClientConfig = {
  baseUrl: string;
};

export type JsonHttpClientConstructor = (
  config: JsonHttpClientConfig
) => JsonHttpClient;

const browserJsonHttp: JsonHttpClientConstructor = (config) => {
  const { baseUrl } = config;

  const get = (path: string): Promise<JsonHttpResponse> => {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", `${baseUrl}${path}`);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          let data: any = xhr.responseText;
          try {
            data = JSON.parse(xhr.responseText);
          } catch (error) {}
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

const nodeJsonHttp: JsonHttpClientConstructor = (config) => {
  const https = require("https") as typeof import("https");
  const { baseUrl } = config;

  if (baseUrl.startsWith("http:")) {
    throw new Error("URLs must be HTTPS");
  }

  const get = (path: string): Promise<JsonHttpResponse> => {
    return new Promise((resolve) => {
      const request = https.request(`${baseUrl}${path}`, (res) => {
        let responseText = "";
        res.on("data", (chunk) => {
          responseText += chunk;
        });
        res.on("end", () => {
          let data: any = responseText;
          try {
            data = JSON.parse(data);
          } catch (error) {}
          resolve({ status: res.statusCode || 0, data });
        });
      });
      request.on("error", (error) => resolve({ status: 500, data: error }));
      request.setHeader("Content-Type", "application/json");
      request.end();
    });
  };

  return {
    get,
  };
};

const isNode: boolean =
  typeof process !== "undefined" &&
  process.versions != null &&
  process.versions.node != null;

const baseUrl = "https://pokeapi.co/api/v2/";

export const http = isNode
  ? nodeJsonHttp({ baseUrl })
  : browserJsonHttp({ baseUrl });
