import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,jsx}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  {
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect" // detecta automáticamente la versión de React
      }
    },
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off", // React 17+ no necesita importar React en cada archivo
      "react/prop-types": "off",         // desactiva la obligación de definir PropTypes
      "no-unused-vars": "warn"           // variables no usadas en amarillo en vez de rojo
    }
  }
]);