// Importing types from another module
// Using type syntax to avoid importing unnecessary code at runtime
// which can help reduce bundle size

// There are two methods to import type aliases from another module

// Method 1: import entire module
// import type { UserResponse, SupportFunction } from "./typesAlias.js";

// Method 2: import specific types
import { type UserResponse, type SupportFunction } from "./typesAlias.js";
