# Obol Frontend Challenge
This is a home assesment for frontend candidates

## Intro
The Obol main's mission is to catch them all! the validators of course 😆 so in matter to achieve that, we need to see your CSS skills to create wonderful components

## Assignment
Given a data API located here: [Pokemon API](https://pokeapi.co/docs/v2#pokemon).

## Figma File 

https://www.figma.com/file/iXKExkvVS8K9Vc13mz3jxk/Deep-Work-x-Obol?node-id=3495%3A7764 

![image](https://user-images.githubusercontent.com/5679878/178573911-2ef475d4-f93b-481f-8475-c4693fdf119e.png)


## Requirements
- displays a list of the of Pokemon using component driven development pattern
- allows you to click on details to open a new tab with wiki data (see instrunction on figma file).
- Search by id or name, the search needs to be triggered by the search button

## Api endpoints
- https://pokeapi.co/api/v2/pokemon?limit=151 to get all the pokemon with a limit
- https://pokeapi.co/api/v2/pokemon/{id-or-name}/ for searching the pokemon
- https://img.pokemondb.net/artwork/large/{name}.jpg for get the image
- https://bulbapedia.bulbagarden.net/wiki/{name} link to wiki

## Extra
- Use a fancy data fetching tool like [SWR](https://swr.vercel.app/) or [React Query](https://tanstack.com/query/v4/?from=reactQueryV3&original=https://react-query-v3.tanstack.com/)

# Getting Started with Create Next App

This project needs to be bootstrapped with [Create NextJs App](https://nextjs.org/docs/api-reference/create-next-app).

## Steps:
1. Clone this repository 
2. If you don't have node installed download it here: https://nodejs.org/en/
3. Boostrap the project with [Create NextJs App](https://nextjs.org/docs/api-reference/create-next-app), use yarn.
4. Run yarn start, and it should load a basic rendered page in your default browser
5. Do periodically commits and use `feature/` branches for commits, please read git flow -> https://nvie.com/posts/a-successful-git-branching-model/
6. Once you finish, made a PR to main branch on this repo.
5. You're ready to code!

### `nvm use` (to use this myou need to add .nvmrc file)
### `yarn && yarn dev`

## Available Scripts

In the project directory, you can run:

### `yarn start` when project is build

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


# Important things to use

1. Typescript
2. React Hooks
3. [Stitches.dev](https://stiches.dev) for the styling
4. [Atomic design pattern](https://atomicdesign.bradfrost.com/chapter-2/)
5. Upload this to netlify site

# Optional but cool stuff that you can use.
1. State manager like [zustand](https://github.com/pmndrs/zustand) or [recoil](https://recoiljs.org/).
2. NextJS layouts.
