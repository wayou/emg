import closureCompiler from "@ampproject/rollup-plugin-closure-compiler";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import tsplugin from "rollup-plugin-typescript2";
import typescript from "typescript";
import pkg from "./package.json";
import postcss from "rollup-plugin-postcss";

const commonPlugins = [
  postcss({
    modules: false,
  }),
  tsplugin({
    // NOTE: enable this to work compatable with closure compiler,
    // or will cause Unknown object type "asyncfunction" error
    clean: true,
  }),
];

export default [
  {
    input: "src/emg.ts",
    output: {
      name: pkg.name,
      file: pkg.browser,
      format: "umd",
      sourcemap: true,
    },
    plugins: commonPlugins.concat([resolve(), commonjs(), closureCompiler()]),
  },
  {
    input: "src/emg.ts",
    output: [{ file: pkg.main, format: "cjs" }, { file: pkg.module, format: "es" }],
    plugins: commonPlugins,
  },
];
