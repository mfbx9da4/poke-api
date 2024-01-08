type JsonHttpResponse = {
  status: number;
  data: unknown;
};

export interface JsonHttp {
  get: (path: string) => Promise<JsonHttpResponse>;
}

type JsonHttpConstructor = (config: { baseUrl: string }) => JsonHttp;

const browserJsonHttp: JsonHttpConstructor = (config) => {
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

          resolve({
            status: xhr.status,
            data: data,
          });
        }
      };
      xhr.send();
    });
  };

  return {
    get,
  };
};

const nodeJsonHttp: JsonHttpConstructor = (config) => {
  const http = require("http") as typeof import("http");
  const { baseUrl } = config;

  const get = (path: string): Promise<JsonHttpResponse> => {
    return new Promise((resolve) => {
      const request = http.request(`${baseUrl}${path}`, (res) => {
        let responseText = "";
        res.on("data", (chunk) => {
          responseText += chunk;
        });
        res.on("end", () => {
          let data: any = responseText;
          try {
            data = JSON.parse(data);
          } catch (error) {}
          resolve({
            status: res.statusCode || 0,
            data,
          });
        });
      });
      request.on("error", (error) => {
        resolve({
          status: 500,
          data: error,
        });
      });
      request.setHeader("Content-Type", "application/json");
      request.end();
    });
  };

  return {
    get,
  };
};

const isBrowser = typeof window !== "undefined";

const baseUrl = "https://pokeapi.co/api/v2/";

export const http = isBrowser
  ? browserJsonHttp({ baseUrl })
  : nodeJsonHttp({ baseUrl });
