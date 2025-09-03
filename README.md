# Protocol Buffers Builder Pattern Demo

## What This Does
- **`trial.proto`**: Protocol Buffers definition
- **`trial.ts`**: Auto-generated TypeScript interfaces (from protoc-gen-ts_proto)
- **`gen.ts`**: Builder pattern generator that reads .proto files
- **`generated-builders.ts`**: Output - fluent builder classes

## How It Works

1. **Proto Definition**: Define your data structures in `trial.proto`
2. **TypeScript Generation**: Use protoc-gen-ts_proto to create `trial.ts`
3. **Builder Generation**: Run `gen.ts` to create fluent builders
4. **Usage**: Use the builders for clean object construction

## Example Usage

```typescript
// Create a user with fluent interface
const user = new UserBuilder()
    .setId("user123")
    .setUsname("john_doe")
    .setAge(30)
    .setStatus(ActStatus.ONLINE)
    .setEmail("john@example.com")
    .build();

// Create a post
const post = new PostBuilder()
    .setId("post1")
    .setContent("Hello world!")
    .setTimestamp(Date.now())
    .build();