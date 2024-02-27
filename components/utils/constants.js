const production = {
    url: 'https://obol-d-app-challenge.vercel.app'
  };
  const development = {
    url: 'http://localhost:3000'
  };
  export const config = process.env.NODE_ENV === 'development' ? development : production;