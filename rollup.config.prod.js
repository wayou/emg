import closureCompiler from "@ampproject/rollup-plugin-closure-compiler";
import commonjs from "rollup-plugin-commonjs";
import image from "rollup-plugin-img";
import pkg from "./package.json";
import postcss from "rollup-plugin-postcss";
import resolve from "rollup-plugin-node-resolve";
import tsplugin from "rollup-plugin-typescript2";

export default [
  {
    input: "src/emg.tsx",
    output: {
      name: pkg.name,
      file: pkg.browser,
      format: "umd",
      sourcemap: true,
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
      },
    },
    external: ["react", "react-dom"],
    plugins: [
      image({
        limit: 10 * 1024,
      }),
      postcss({
        modules: false,
      }),
      tsplugin({
        // NOTE: enable this to work compatable with closure compiler,
        // or will cause Unknown object type "asyncfunction" error
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            declaration: false,
          },
        },
      }),
      resolve(),
      commonjs(),
      closureCompiler(),
    ],
  },
  {
    input: "src/emg.tsx",
    output: [{ file: pkg.main, format: "cjs" }, { file: pkg.module, format: "es" }],
    external: ["react", "react-dom"],
    plugins: [
      image({
        limit: 10 * 1024,
      }),
      postcss({
        modules: false,
      }),
      tsplugin({
        clean: true,
        tsconfigOverride: {
          // NOTE: exclude to avoid unwanted files generated for publishing
          exclude: ["examples"],
        },
      }),
    ],
  },
];
