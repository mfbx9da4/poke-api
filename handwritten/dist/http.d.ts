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
export type JsonHttpClientConstructor = (config: JsonHttpClientConfig) => JsonHttpClient;
export declare const http: JsonHttpClient;
//# sourceMappingURL=http.d.ts.map