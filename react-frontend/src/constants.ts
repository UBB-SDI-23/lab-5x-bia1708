const PROD_BACKEND_API_URL = "http://16.16.75.254/";
const DEV_BACKEND_API_URL = "http://16.16.75.254/";

export const BACKEND_API_URL =
	process.env.NODE_ENV === "development" ? DEV_BACKEND_API_URL : PROD_BACKEND_API_URL;