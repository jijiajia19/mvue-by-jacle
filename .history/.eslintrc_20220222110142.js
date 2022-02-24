module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
        es6: true,
    },
    extends: [
        'plugin:vue/essential',
        'prettier',
        'prettier/vue',
        'plugin:prettier/recommended',
        'eslint:recommended',
    ],
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module',
        parser: 'babel-eslint',
    },
    plugins: [
        'prettier',
        'vue',
        'html',
        'import',
        'node',
        'standard',
        'promise',
    ],
    rules: {
        semi: [2, 'always'],
        'prettier/prettier': 'error',
        'generator-star-spacing': 'off',
        indent: [2, 4, { SwitchCase: 1 }],
        'space-before-function-paren': 'off',
        'no-unused-vars': 'off',
        'no-debugger': 'off',
    },
    overrides: [],
    globals: {
        $: false,
        jquery: false,
        ActiveXObject: false,
        arbor: true,
        layer: false,
    },
};
