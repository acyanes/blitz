# Runtime
JS Runtime is a combination of a JS Engine (V8), Event Loop (async handling).

# Rust
tokio is an asynchronous Rust runtime. Responsible for interacting with OS abstractions.

# Deno Core
Abstracts away interactions with the v8 engine

# How Rust fn are called in JS 
Under the hood, during runtime startup, Rust functions are registered with the V8 JavaScript engine as what appear to be
normal JavaScript functions. When you call these functions, V8 thinks it's calling regular JavaScript, but the Deno runtime 
intercepts these calls and routes them to the actual Rust implementations.