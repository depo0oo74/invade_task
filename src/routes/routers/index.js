// ** Import Routes
import websiteRoutes from "./website/index.js";
import errorsRoutes from "./errors/index.js";

const routes = [...websiteRoutes, ...errorsRoutes];

export default routes;