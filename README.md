# RepositoryMiner API

## Overview

RepositoryMiner is an API which provide information about software metrics, code smells and technical debts previously analyzed.


## Getting Started

Clone the repo:
```sh
git clone git@github.com:DavidPinho/repository-miner-api.git
cd repository-miner-api
```

Install nodejs: https://nodejs.org/en/download/package-manager/

Install yarn: https://yarnpkg.com/lang/en/docs/install/
```js
npm install -g yarn
```

Install dependencies:
```sh
yarn
```

Start server:
```sh
# Start server
yarn start
```

Keep in mind that you need to have mongodb installed. See the .env file to set up the MONGO_HOST and MONGO_PORT.

Tests:
```sh
# Run tests written in ES6 
yarn test

# Run test along with code coverage
yarn test:coverage

# Run tests on file change
yarn test:watch

# Run tests enforcing code coverage (configured via .istanbul.yml)
yarn test:check-coverage
```

Lint:
```sh
# Lint code with ESLint
yarn lint
```

## Docker

Install docker: https://docs.docker.com/engine/installation/

Start API:
```sh
# service restarts on file change
docker-compose up --build
```

Stop API:
```sh
# Stop and remove all containers
docker-compose down
```
