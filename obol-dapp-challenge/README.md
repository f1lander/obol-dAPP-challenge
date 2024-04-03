
## Obol Pokemon Catcher

This is a simple web app where you can `sign` a pokemon via `eth` transaction.

## How to run
This project uses [turoborepo](https://turbo.build/repo) to manage the monorepo. As adviced this project uses `yarn` as package manager. Given a chance I would have used `pnpm` 😄


## Folder structure
```
.
├── packages
│   ├── config-eslint
│   ├── config-tailwind
│   ├── config-typescript
|   ├── ui
├── apps
│   ├── web
```

- `packages` contains all the shared packages that can be used across the apps
- `apps` contains all the apps that are part of the monorepo
- `web` is the main app that is being developed
- `ui` is the shared package that contains all the shared components
- `config-eslint` contains the eslint configuration
- `config-tailwind` contains the tailwind configuration
- `config-typescript` contains the typescript configuration


## Steps to run
1. Clone the repo
2. Run `yarn` to install all the dependencies
3. Run `yarn dev` to start the development server
4. Open `http://localhost:3000` in your browser
5. Connect your wallet and sign a pokemon


