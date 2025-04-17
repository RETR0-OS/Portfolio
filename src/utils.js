export const getImageUrl = (path) => {
   // Dynamically determine the base URL
   const base = `${window.location.origin}/assets/`;
   
   // Join the base path with the provided path
   const fullPath = `${base}${path}`;
   console.log(`Image URL: ${fullPath}`);
   return fullPath;
};
