## Description

This is a minimal reproduction for the nestjs/graphql issue found here: https://github.com/nestjs/graphql/issues/743

## Instructions

```bash
$ npm install
$ npm run start
```
Then open the file generated at `./src/generated/models.ts`

You will see that this generated file references unknown types and will not compile.
