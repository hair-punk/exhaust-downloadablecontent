# fec3-amkw-service

> Exhaust Purchase Options Module (Steam Game Page emulator)

## Related Projects

  - https://github.com/hair-punk/fec3-tvo-service
  - https://github.com/hair-punk/fec3-abhi-service
  - https://github.com/hair-punk/fec3-azu-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage
> npm start
  - server listens on localhost:3003
> launch MongoDB server
  - app will create a db /purchaseoptionsservice
  > npm run seed-db
- update index.jsx (line 196: where <App/> is rendered) to receive a gameid (Number between 1-100) instead of empty string

## Requirements
- Node 8.11.3
- Mongo shell 4.0.9
- Bundling with webpack + Babel7

## Development
Testing
- Mongoose MongoDB app: Mocha + chai.expect
- React: jest + enzyme

### Installing Dependencies
From within the root directory:
> npm install


