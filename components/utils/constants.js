const production = {
  url: "https://obol-d-app-challenge.vercel.app",
};
const development = {
  url: "http://localhost:3000",
};
export const config =
  process.env.NEXT_PUBLIC_VERCEL_ENV === "development"
    ? development
    : production;
