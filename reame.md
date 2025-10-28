Inconsistent module errors with `pool: 'forks'` (or `vmForks`). `fileParallelism: false` or `maxWorkers: 1` fix the problem, but makes the tests slow.

`pool: threads` (or `vmThreads`) work fine.

Importing and calling `createVuetify` function in multiple test files increases the likelihood of error, but it can happen without vuetify. It seems that the more imports are in test files, the greater the probability of an error.

## How to get an error

run `npm test` a few times until the error appears
or `npm run test:50` to run the test 50 times

## Error examples

SyntaxError: Unexpected end of input

SyntaxError: Unexpected token '}'

SyntaxError: missing ) after argument list

SyntaxError: Missing initializer in const declaration

TypeError: (0 , __vite_ssr_import_3__.genericComponent) is not a function

TypeError: (0 , __vite_ssr_import_2__.createVuetify) is not a function

TypeError: (0 , __vite_ssr_import_1__.createVuetifyAdapter) is not a function

TypeError: (0 , __vite_ssr_import_1__.createDefaults) is not a function

TypeError: (0 , __vite_ssr_import_1__.someFunctionName) is not a function
