# API Generator Comparison

## Generate APIs

### SpeakEasy

```bash
# Install
brew install speakeasy-api/homebrew-tap/speakeasy
# Run
speakeasy generate sdk -s "./openapi.yaml" -l typescript -o ./speakeasy-generator
```

### OpenAPI Generator

```bash
# Install
brew install openapi-generator
# Run
openapi-generator generate -i ./openapi.yaml -g typescript -o ./openapi-generator --package-name poke-api --openapi-generator-ignore-list "README.md"

```

## Test APIs

```bash
cd tests
npm run test
```
