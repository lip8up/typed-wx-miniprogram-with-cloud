module.exports = {
  root: true,
  env: {
    es6: true,
  },
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-jsdoc',
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [ 'tsconfig.json', 'tests/tsconfig.json' ],
    sourceType: 'module'
  },
  reportUnusedDisableDirectives: true,
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': 'warn',
    '@typescript-eslint/array-type': [
      'warn',
      {
        default: 'array',
      },
    ],
    '@typescript-eslint/ban-types': [
      'warn',
      {
        types: {
          Object: {
            message: 'Avoid using the `Object` type. Did you mean `object`?',
          },
          Function: {
            message:
              'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.',
          },
          Boolean: {
            message: 'Avoid using the `Boolean` type. Did you mean `boolean`?',
          },
          Number: {
            message: 'Avoid using the `Number` type. Did you mean `number`?',
          },
          String: {
            message: 'Avoid using the `String` type. Did you mean `string`?',
          },
          Symbol: {
            message: 'Avoid using the `Symbol` type. Did you mean `symbol`?',
          },
        },
      },
    ],
    '@typescript-eslint/consistent-type-assertions': 'off',
    '@typescript-eslint/dot-notation': 'warn',
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        accessibility: 'explicit',
      },
    ],
    '@typescript-eslint/indent': [
      'warn',
      2,
      {
        ObjectExpression: 'first',
        FunctionDeclaration: {
          parameters: 'first',
        },
        FunctionExpression: {
          parameters: 'first',
        },
        SwitchCase: 1
      },
    ],
    '@typescript-eslint/member-delimiter-style': [
      'warn',
      {
        multiline: {
          delimiter: 'none',
          requireLast: true,
        },
        singleline: {
          delimiter: 'comma',
          requireLast: false,
        },
      },
    ],
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-empty-interface': 'warn',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-misused-new': 'warn',
    '@typescript-eslint/no-namespace': 'warn',
    '@typescript-eslint/no-parameter-properties': 'off',
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-var-requires': 'warn',
    '@typescript-eslint/prefer-for-of': 'warn',
    '@typescript-eslint/prefer-function-type': 'warn',
    '@typescript-eslint/prefer-namespace-keyword': 'warn',
    '@typescript-eslint/semi': ['warn', 'never'],
    '@typescript-eslint/unbound-method': [
      'error',
      {
        ignoreStatic: true
      }
    ],
    '@typescript-eslint/triple-slash-reference': [
      'warn',
      {
        path: 'always',
        types: 'prefer-import',
        lib: 'always',
      },
    ],
    '@typescript-eslint/unified-signatures': 'warn',
    '@typescript-eslint/no-shadow': ['warn', { ignoreTypeValueShadow: true }],
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { vars: 'all', args: 'none' }],
    'arrow-parens': ['warn', 'as-needed'],
    'comma-dangle': 'off',
    complexity: 'off',
    'constructor-super': 'warn',
    'dot-notation': 'warn',
    eqeqeq: ['off', 'always'],
    'guard-for-in': 'warn',
    'id-blacklist': 'warn',
    'id-match': 'warn',
    'import/order': 'off',
    'jsdoc/check-alignment': 'warn',
    'jsdoc/check-indentation': 'warn',
    'jsdoc/newline-after-description': 'warn',
    'max-classes-per-file': ['warn', 1],
    'new-parens': 'off',
    'no-bitwise': 'off',
    'no-caller': 'warn',
    'no-cond-assign': 'warn',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-empty': 'off',
    'no-empty-function': 'off',
    'no-eval': 'warn',
    'no-fallthrough': 'off',
    'no-invalid-this': 'off',
    'no-multiple-empty-lines': 'off',
    'no-new-wrappers': 'warn',
    'no-shadow': 'off',
    'no-throw-literal': 'warn',
    'no-trailing-spaces': 'warn',
    'no-undef-init': 'warn',
    'no-underscore-dangle': 'warn',
    'no-unsafe-finally': 'warn',
    'no-unused-expressions': 'off',
    'no-unused-labels': 'off',
    'no-use-before-define': 'off',
    'no-var': 'warn',
    'object-shorthand': 'warn',
    'one-var': ['warn', 'never'],
    'prefer-const': 'warn',
    'quote-props': ['warn', 'as-needed'],
    quotes: ['warn', 'single', { allowTemplateLiterals: true }],
    radix: 'warn',
    semi: ['warn', 'never', { beforeStatementContinuationChars: 'always' }],
    'spaced-comment': [
      'warn',
      'always',
      {
        markers: ['/'],
      },
    ],
    'use-isnan': 'warn',
    'valid-typeof': 'off',
  },
}
