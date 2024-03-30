// titleCase
export const titleCase = (str: string): string => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};

// capitalize
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// removeWhitespace
export const removeWhitespace = (str: string): string => {
  return str.replace(/\s/g, '');
};
