## Aim

- Production grade Typescript SDK for the [Pokemon API](https://pokeapi.co/)
- Only supports `/pokemon/{id or name}`, `/stat/{id or name}` and `/nature/{id or name}` endpoints but built to be extensible
- Imagine the existing typescript libraries do not exist

## Approach

There are two main approaches to building an SDK: either generate it or write it by hand. Overall, generating the SDK is a lot better approach but I thought I should do both as the handwritten SDK will give you a better idea of my coding style.

The are some minor pros of hand-writing the SDK:

- **Optimizations**: For example with the knowledge that we will only ever need to do `HTTP GET` with JSON we can build a tiny HTTP client rather than bundling Axios.
- **Idiomatic**: eg In my opinion, having two methods `get(id: number)` and `getByName(name: string)` is nicer than the generated `get(idOrName: number | string)` whereas in Swift I would implement `get(id: Int)` and `get(name: String)`.

The pros of generating the SDK are:

- **Less redundancy**: in the types, documentation, examples and tests.
- **Faster**: I was able to generate the SDK in minutes.
- **More consistent**: less room for human error in naming.

## General Notes

- **Checked-in node dependencies**: I shipped the `node_module`s with this repository so it's easy for you to run tests, you won't have to run `npm install`. I'm also not [opposed to that in general](https://www.jackfranklin.co.uk/blog/check-in-your-node-dependencies/).
- **Speakeasy generator**: I tried out Speakeasy but ran into a circular reference issue. With a bit more time I would isolate and fix it. Instead please pay more attention to `handwritten` and `openapi-generator` folders.

## Notes on the Handwritten SDK

- **Peer dependencies vs bundled dependencies**: The age old dilemma of static vs dynamic linking. For user convenience I went for bundling zod but it would be nice to provide the option to use a shared version to save space.
- **SDK validation**: to ensure that types are always safe, I've added runtime validation to the SDK. I mostly used GitHub copilot to write the validation code. This is a tradeoff between speed and correctness. To ensure the types are perfect aligned with the server I've added the command `npm run test:brute-force-parse-records`. It turns out some of the official documentation was inaccurate and there are some fields which are nullable.
- **Error handling**: I always appreciate having predefined error codes which is why I have included `PokeSDK.errorCode`. I prefer error codes rather than `instanceof` checks since codes will survive JSON stringification which I've run into in the past.
- **Single file**: Decided to split code into multiple files. I think it's actually better from a user's perspective to have a single source file as it's easier to monkey patch. However, it's easier to maintain and should enable better tree shaking to have multiple files.
- **Documentation redundancy**: The way I have implemented the SDK, the documentation is copied from the website and included in the JS Doc comments and the readme. This is terrible. Again, a central schema would be ideal.
- **Validation redundancy**: The SDK and the server perform the same validation of inputs and outputs. Moving to a central schema which generates all of these runtime checks would be ideal.
- **Examples / test redundancy**: The examples are almost the same code as the tests. Ideally there would be a single source of truth because it gives the user confidence that the examples are correct.
- **HTTP client**: I built a tiny isomorphic JSON HTTP client which meets the needs of this read-only JSON API. It uses `XMLHttpRequest` in the browser and `https` in node for maximum backwards compatibility. The main advantage is not having to ship Axios which saves ~30kb which is around 1/5 of the size of the SDK. I manually tested this client in the browser but it would be better to check in some browser tests too.
- **Tree-shaking and ESM**: Something I didn't get to is, writing this as an ESM-first library as it should improve tree-shaking and future proof the SDK. I also would have liked to verify that tree-shaking is working as intended.

## Notes on the Generated SDKs

- **Openapi.yaml**: Instead of parsing the official documentation and generating the `openapi.yaml` [I modified one somebody had made previously](https://github.com/cliffano/pokeapi-clients/blob/main/specification/pokeapi.yml). Ideally there would be a script to regenerate the `openapi.yaml` from the official documentation. Or better yet the official documentation would be generated from the `openapi.yaml`.
