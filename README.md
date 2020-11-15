# ts-generate-schema

Generate json-schema files from your typescript definitions

![npm](https://img.shields.io/npm/v/ts-generate-schema)
[![Build](https://circleci.com/gh/morintd/ts-generate-schema.svg?style=shield)](https://app.circleci.com/pipelines/github/morintd/ts-generate-schema)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5577363312610be54f84/test_coverage)](https://codeclimate.com/github/morintd/ts-generate-schema/test_coverage)
[![Maintainability](https://api.codeclimate.com/v1/badges/5577363312610be54f84/maintainability)](https://codeclimate.com/github/morintd/ts-generate-schema/maintainability)
![npm](https://img.shields.io/npm/dm/ts-generate-schema)

## Features

- Generate json-schema files from one single command :

  - Run `yarn ts-generate-schema` ou `npm run ts-generate-schema` in your root folder.
  - After writing the following TypeScript definition :
  > src/types/login.response.ts

  ```typescript
  export type RawLoginUserResponse = {
    user: {
      id: string;
      email: string;
      username: string;
      firstname: string;
    };
    token: {
      expiresIn: number;
      accessToken: string;
    };
  };
  ```

  - Get this file in return :

  > src/types/schema/raw-login-user.response.jsc.ts

  ```typescript
  export default {
    type: 'object',
    properties: {
      user: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          username: {
            type: 'string',
          },
          firstname: {
            type: 'string',
          },
        },
        required: ['email', 'firstname', 'id', 'username'],
      },
      token: {
        type: 'object',
        properties: {
          expiresIn: {
            type: 'number',
          },
          accessToken: {
            type: 'string',
          },
        },
        required: ['accessToken', 'expiresIn'],
      },
    },
    required: ['token', 'user'],
    $schema: 'http://json-schema.org/draft-07/schema#',
  };
  ```

## Usage

- Install with `npm i -D ts-generate-schema` or `yarn add -D ts-generate-schema`
- Add the following scripts in your **package.json**.

```json
"schema": "ts-generate-schema <pattern>"
```

- You can also use it globally with `npm i -g ts-generate-schema` and simply running `ts-generate-schema <pattern>` anywhere

### Command Line
```<pattern>``` is a [glob](https://github.com/isaacs/node-glob#readme) pattern to find files to handle.

I would recommand giving those files a special extension (such as .dto.ts or .response.ts for request) and use ```ts-generate-schema src/**/*.dto.ts```
```
Usage: ts-generate-schema <pattern>
Options:
  --help     Show help                                                 [boolean]
  --version  Show version number                                       [boolean]
  --to       Extension of generated json-schema     [string] [default: "jsc.ts"]
  --export   How to export generated json-schema from file
                                            [string] [default: "export default"]
```
## Motivation

I'm passionate about software architecture, quality and scaling.

I've recently been working on a web and mobile project where I made tons of API calls. I came to the conlusion that my way of handling API calls was ... not good enough.

And, at some point in every project I worked on, we had a server getting an update without the front-end team being perfectly notified about it.

My aim was to be able to know when a request we received was different from our primary API. As I'm a TypeScript lover and user, I quickly found some way to use TS definitions as json-schemas with a validator such as AJV.

Nevertheless, libraries providing us with TypeScript to JSON Schema functionnalities were too low level to be used as they are.

I had axios and interceptors to setup my strategies, AJV to handle validation and now this library to quickly generate my JSON-schemas from my TypeScript definitions.

## License

[MIT](https://github.com/mrdtd/service/blob/master/LICENSE)
