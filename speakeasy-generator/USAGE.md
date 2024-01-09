<!-- Start SDK Example Usage [usage] -->
```typescript
import { PokeSDK } from "poke-api";

async function run() {
    const sdk = new PokeSDK();

    const limit = 578676;
    const offset = 855699;

    const res = await sdk.ability.abilityList(limit, offset);

    if (res?.statusCode !== 200) {
        throw new Error("Unexpected status code: " + res?.statusCode || "-");
    }

    // handle response
}

run();

```
<!-- End SDK Example Usage [usage] -->