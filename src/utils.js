export const getImageUrl = (path) => {
   return new URL(`/assets/${path}`, "http://localhost:5173").href;
}