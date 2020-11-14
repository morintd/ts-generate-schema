export default {
  "type": "object",
  "properties": {
    "user": {
      "type": "object",
      "properties": {
        "id": {
          "type": "string"
        },
        "createdAt": {
          "type": "string"
        },
        "updatedAt": {
          "type": "string"
        },
        "email": {
          "type": "string"
        },
        "username": {
          "type": "string"
        },
        "firstname": {
          "type": "string"
        },
        "lastname": {
          "type": "string"
        },
        "roles": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "signUp": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "createdAt": {
              "type": "string"
            },
            "updatedAt": {
              "type": "string"
            },
            "validateEmail": {
              "type": "boolean"
            },
            "facebook": {
              "type": [
                "null",
                "string"
              ]
            },
            "gmail": {
              "type": [
                "null",
                "string"
              ]
            }
          },
          "required": [
            "createdAt",
            "facebook",
            "gmail",
            "id",
            "updatedAt",
            "validateEmail"
          ]
        }
      },
      "required": [
        "createdAt",
        "email",
        "firstname",
        "id",
        "lastname",
        "roles",
        "signUp",
        "updatedAt",
        "username"
      ]
    },
    "token": {
      "type": "object",
      "properties": {
        "expiresIn": {
          "type": "number"
        },
        "accessToken": {
          "type": "string"
        }
      },
      "required": [
        "accessToken",
        "expiresIn"
      ]
    }
  },
  "required": [
    "token",
    "user"
  ],
  "$schema": "http://json-schema.org/draft-07/schema#"
}