import { replaceTscAliasPaths } from "tsc-alias";
import { build } from "esbuild";
import fg from "fast-glob";

await build({
  entryPoints: await fg(["src/**/*.ts"]),
  outdir: "dist",
  platform: "node",
  tsconfig: "tsconfig.json",
  format: "cjs",
});

// Post build paths resolve since ESBuild only natively
// support paths resolution for bundling scenario
await replaceTscAliasPaths({
  configFile: "tsconfig.json",
  watch: false,
  outDir: "dist",
  declarationDir: "dist",
});
