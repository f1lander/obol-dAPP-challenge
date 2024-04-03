# Obol dAPP Challenge

Welcome to Obol's frontend and Web3 developer challenge, focusing on modern web technologies and blockchain interactions.

## Intro
Obol's mission expands to the world of Web3! Not only do we want to list and preview Pokemon, but we also want to allow users to interact with them using Ethereum blockchain technology.

## Assignment
Enhance the Pokemon application to integrate Web3 functionalities. Users should be able to connect their MetaMask wallet and "Collect" a Pokemon by signing a simple Ethereum transaction.

## Design Reference

Refer to our updated Figma file for design guidelines: [Figma File]([https://www.figma.com/file/iXKExkvVS8K9Vc13mz3jxk/Deep-Work-x-Obol?node-id=3495%3A7764](https://www.figma.com/file/lUoH5dEVFi8NgbptXNsJUI/Obol-Design-Files-(Copy)?type=design&node-id=3495-7764&mode=design)

## Key Features and Technical Requirements

- **MetaMask Wallet Connection:** Implement functionality to connect to a user's MetaMask wallet using libraries like ethers.js, web3-react, or useDapp.
- **Ethereum Transaction Signing:** Allow users to "Collect" a Pokemon by initiating and signing a simple Ethereum transaction.
- **Server-Side Rendering (SSR):** Continue using SSR for enhanced performance and SEO.
- **Tooltip Preview with Web Scraping:** Implement a tooltip with basic Pokemon info using server-side web scraping.
- **Tailwind CSS and Atomic Design:** Use Tailwind CSS for styling and follow the Atomic Design methodology for component development.
- **Use of React Hooks and Custom Hooks:** Emphasize the use of React Hooks for state and lifecycle management, particularly in managing Web3 interactions.
- **API Integration and Web3 Integration:** Use the provided Pokemon API and integrate Web3 functionalities for blockchain interactions.
- **Deployment:** Deploy the application ensuring that both SSR and Web3 functionalities work seamlessly in the production environment.

## API and Blockchain Endpoints

- Pokemon List: `https://pokeapi.co/api/v2/pokemon?limit=151`
- Individual Pokemon Data: `https://pokeapi.co/api/v2/pokemon/{id-or-name}/`
- Bulbapedia Link: `https://bulbapedia.bulbagarden.net/wiki/{name}`

## Getting Started

1. Ensure Node.js is installed.
2. Initialize the project using Create Next.js App with Yarn.
3. Implement features following the Git Flow model.
4. Submit a PR to the main branch upon completion.
👀
### Development Commands

- `nvm use`
- `yarn && yarn dev` (for development)
- `yarn start` (for production)

## Evaluation Criteria

- Successful integration of Web3 functionalities.
- Clean and efficient implementation of SSR, data state, and web scraping.
- Quality and organization of code, following best practices.
- Effective use of React Hooks and custom hooks.
- Styling accuracy and adherence to design patterns.
- Documentation and ease of understanding.

Use TS please 👀

This challenge is your opportunity to showcase your skills in both advanced frontend development and basic Web3 interactions. We are excited to see how you creatively integrate these technologies!

## deploy

Deploy this using something like vercel or similar, and share the deployed link in your PR description.

## Note

Since PRs to this repo are not required, cretae your repo as private and add me (f1lander) as collaborator so then I can review it.



