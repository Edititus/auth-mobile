module.exports = {
  presets: [
    "module:metro-react-native-babel-preset",
    "@babel/preset-typescript",
    ["@babel/preset-env", { targets: { node: "current" } }],
  ],
  plugins: [
    [
      "module:react-native-dotenv",
      {
        moduleName: "react-native-dotenv",
        path: ".env",
        blacklist: null,
        whitelist: null,
        safe: true,
        allowUndefined: true,
      },
    ],
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [
          ".ios.ts",
          ".android.ts",
          ".ts",
          ".ios.tsx",
          ".android.tsx",
          ".tsx",
          ".ios.js",
          ".android.js",
          ".jsx",
          ".js",
          ".json",
        ],
        alias: {
          "*": ".",
          "~root": "./",
          "~src": "./src",
          "~api": "./src/api",
          "~assets": "./src/assets",
          "~config": "./src/config",
          "~lib": "./src/lib",
          "~rtk": "./src/rtk",
          "~localization": "./src/localization",
          "~navigation": "./src/navigation",
          "~components": "./src/components",
          "~screens": "./src/screens",
          "~theme": "./src/theme",
          "~types": "./src/types",
          "~utils": "./src/utils",
        },
      },
    ],
    [
      "@babel/plugin-transform-class-properties",
      { "loose": true } // Set "loose" mode to true
    ],
    [
      "@babel/plugin-transform-private-methods",
      { "loose": true } // Set "loose" mode to true
    ],
    [
      "@babel/plugin-transform-private-property-in-object",
      { "loose": true } // Set "loose" mode to true
    ],
  ],
};
