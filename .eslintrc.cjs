module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
    },
    rules: {
        "prettier/prettier": "error",
        "vue/component-name-in-template-casing": ["error", "PascalCase"],
        "vue/multi-word-component-names": 0,
        "@typescript-eslint/no-unused-vars": 0,
        "import/namespace": 0,
        "no-use-before-define": 0,
        "vue/require-default-prop": 0,
    },
    globals: {
        $nuxt: true,
    },
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "@typescript-eslint/parser",
    },
    extends: [
        "plugin:prettier/recommended",
        "plugin:vue/vue3-essential",
        "plugin:vue/vue3-strongly-recommended",
        "plugin:vue/vue3-recommended",
        "@nuxtjs/eslint-config-typescript",
        "prettier",
    ],
};
