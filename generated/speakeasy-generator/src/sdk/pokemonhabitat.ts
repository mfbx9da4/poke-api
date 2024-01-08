/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class PokemonHabitat extends ClientSDK {
    private readonly options$: SDKOptions;

    constructor(options: SDKOptions = {}) {
        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
        });

        this.options$ = options;
        void this.options$;
    }
    async pokemonHabitatList(
        limit?: number | undefined,
        offset?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.PokemonHabitatListResponse> {
        const input$: operations.PokemonHabitatListRequest = {
            limit: limit,
            offset: offset,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.PokemonHabitatListRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const path$ = this.templateURLComponent("/api/v2/pokemon-habitat/")();

        const query$ = [
            enc$.encodeForm("limit", payload$.limit, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("offset", payload$.offset, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        const response = await this.fetch$(
            { method: "get", path: path$, headers: headers$, query: query$, body: body$ },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.PokemonHabitatListResponse$.inboundSchema.parse({
                ...responseFields$,
                object: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }

    async pokemonHabitatRead(
        id: number,
        options?: RequestOptions
    ): Promise<operations.PokemonHabitatReadResponse> {
        const input$: operations.PokemonHabitatReadRequest = {
            id: id,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = operations.PokemonHabitatReadRequest$.outboundSchema.parse(input$);
        const body$ = null;

        const pathParams$ = {
            id: enc$.encodeSimple("id", payload$.id, { explode: false, charEncoding: "percent" }),
        };

        const path$ = this.templateURLComponent("/api/v2/pokemon-habitat/{id}/")(pathParams$);

        const response = await this.fetch$(
            { method: "get", path: path$, headers: headers$, body: body$ },
            options
        );

        const responseFields$ = {
            ContentType: response.headers.get("content-type") ?? "application/octet-stream",
            StatusCode: response.status,
            RawResponse: response,
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = operations.PokemonHabitatReadResponse$.inboundSchema.parse({
                ...responseFields$,
                PokemonHabitat: responseBody,
            });
            return result;
        } else {
            const responseBody = await response.text();
            throw new errors.SDKError("Unexpected API response", response, responseBody);
        }
    }
}
