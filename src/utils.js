export const getImageUrl = (path) => {
    console.log(`Path: ${path}`);
    console.log(`URL: ${new URL(`/assets/${path}`, "http://localhost:5173").href}`);
    return new URL(`/assets/${path}`, "http://localhost:5173").href;
}