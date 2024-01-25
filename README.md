# Obol Advanced Frontend Challenge

Welcome to Obol's frontend developer challenge, now tailored for a more sophisticated skill set with a focus on Server-Side Rendering (SSR), web scraping, and component design.

## Intro
Obol's main mission is to "catch them all" - validators, that is! We're elevating our approach by not just displaying Pokemon, but also providing an interactive tooltip preview using advanced frontend techniques.

## Assignment
Enhance the Pokemon application to list Pokemon using SSR and show a tooltip preview with basic Pokemon info on hover. The tooltip data should be dynamically loaded using web scraping techniques.

## Design Reference

Please refer to our updated Figma file for design guidelines: [Figma File](https://www.figma.com/file/iXKExkvVS8K9Vc13mz3jxk/Deep-Work-x-Obol?node-id=3495%3A7764)

## Key Features and Technical Requirements

- **Server-Side Rendering (SSR):** The application should use SSR for rendering the list of Pokemon, ensuring improved performance and SEO.
- **Tooltip Preview:** Implement a tooltip that appears on hover over a Pokemon in the list. This tooltip should display initial information about the Pokemon, obtained via server-side web scraping.
- **Web Scraping for Tooltip Data:** Fetch tooltip data through server-side web scraping from a reliable source.
- **External Linking:** Clicking on a Pokemon should redirect the user to the corresponding Bulbapedia page for detailed information.
- **API Integration:** Use the provided API endpoints to fetch Pokemon data and add backend logic for web scraping as needed.
- **Use of Tailwind CSS:** Implement Tailwind CSS for styling. You may use headless component libraries, but if the library includes base designs (like Shadcdn UI), ensure to override them to match the style in the Figma design.
- **Atomic Design Pattern:** Components should be developed using the Atomic Design methodology for better reusability and organization.
- **Deployment:** Deploy the updated application to a platform like Netlify, ensuring that SSR works correctly in the production environment.

## API Endpoints

- List of Pokemon: `https://pokeapi.co/api/v2/pokemon?limit=151`
- Individual Pokemon: `https://pokeapi.co/api/v2/pokemon/{id-or-name}/`
- Pokemon Image: `https://img.pokemondb.net/artwork/large/{name}.jpg`
- Bulbapedia Link: `https://bulbapedia.bulbagarden.net/wiki/{name}` (for external linking)

## Getting Started

1. Clone the repository.
2. If Node.js is not installed, download it from [here](https://nodejs.org/en/).
3. Initialize the project with Create Next.js App using Yarn.
4. Follow the Git Flow model for branching and PRs.
5. After completion, submit a PR to the main branch.

### Development Commands

- `nvm use` (requires .nvmrc file)
- `yarn && yarn dev` for development mode
- `yarn start` for production mode

## Evaluation Criteria

- Effective implementation of SSR and web scraping.
- Performance and optimization.
- Code quality, following best practices.
- Adherence to the Atomic Design methodology.
- Styling accuracy compared to the Figma design.
- Documentation and readability of code.

We look forward to seeing your innovative approach to this challenge. Good luck!
