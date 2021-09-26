module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        "plugin:vue/essential",
        "eslint:recommended"
    ],
    settings: {
        "import/resolver": {
            alias: [
                ["@components", "./src/app/shared/components"],
                ["@shared", "./src/app/shared"],
                ["~", "./src/app"],
                ["@", "./src"],
            ]
        },
    },
    plugins: [
        // 'vuetify',
    ],
    rules: {},
    parserOptions: {
        parser: 'babel-eslint',
    },
};
