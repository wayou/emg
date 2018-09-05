import commonjs from "rollup-plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import postcss from "rollup-plugin-postcss";
// import replace from "rollup-plugin-replace";
import resolve from "rollup-plugin-node-resolve";
import serve from "rollup-plugin-serve";
import tsplugin from "rollup-plugin-typescript2";
import image from "rollup-plugin-img";

export default {
  input: "./examples/examples.tsx",
  output: {
    file: "dist/examples.bundle.js",
    format: "iife",
    sourcemap: true,
    globals: {
      react: "React",
      "react-dom": "ReactDOM",
    },
  },
  external: ["react", "react-dom"],
  plugins: [
    // replace({
    //   "process.env.NODE_ENV": JSON.stringify("development"),
    // }),
    image({
      limit: 10 * 1024,
    }),
    resolve(),
    commonjs({
      // NOTE: this need react, react-dom been install into the dependency section in `package.json`, or rollup won't find the two libs
      // include: ["node_modules/**"],
      // namedExports: {
      //   "node_modules/react/index.js": ["Children", "Component", "PropTypes", "createElement"],
      //   "node_modules/react-dom/index.js": ["render"],
      // },
    }),
    postcss({
      modules: false,
    }),
    tsplugin({
      clean: true,
      tsconfigOverride: {
        compilerOptions: {
          declaration: false,
        },
      },
    }),

    serve({
      open: true,
      port: 3000,
      contentBase: "./",
    }),
    livereload(),
  ],
};
