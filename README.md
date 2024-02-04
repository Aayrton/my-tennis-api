# My Tennis API

![Node.js](https://img.shields.io/badge/Node.js-v20.11.0-green)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.3.3-blue)
![Express](https://img.shields.io/badge/Express-v4.18.2-lightgrey)
![Jest](https://img.shields.io/badge/Jest-v29.7.0-red)

## Description

This is an API project written in TypeScript, providing endpoints for Eurotennis.

Live API: https://api-eurotennis.vercel.app/

Before you begin, ensure you have met the following requirements:

- Node.js installed (LTS)
- npm or yarn package manager
- Clone or fork this repository

## Installation

1. Install project dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

The server will run on `http://localhost:8000` by default.

Build the TypeScript code:

```bash
npm run build
```

## Scripts

- `npm run build`: Clean the `dist` directory and compile TypeScript files.
- `npm run dev`: Start the development server using nodemon for auto-reloading.
- `npm test`: Run Jest tests with code coverage.
- `npm run ts.check`: Run TypeScript compiler to check for type errors.
- `npm run add-build`: Add the `dist` directory to version control (pre-commit hook).

## Dependencies

- **Express**: Fast, unopinionated, minimalist web framework for Node.js.
- **TypeScript**: Typed superset of JavaScript that compiles to plain JavaScript.
- **Jest**: JavaScript Testing Framework with a focus on simplicity.
- **Nodemon**: Utility that monitors for changes and automatically restarts your server.
- **Prettier**: Code formatter for maintaining a consistent code style.
