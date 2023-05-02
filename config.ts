export const apiAdress='http://localhost:3008';

export const proxyApi="/api";

export const urlPrefix= process.env.NODE_ENV === "development" ?proxyApi: "";
