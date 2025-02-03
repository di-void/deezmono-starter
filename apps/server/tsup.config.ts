import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["./src/index.ts"],
  outDir: "dist/src",
  //   format: ["esm"],
  splitting: true,
  // sourcemap: true,
  clean: true,
});
