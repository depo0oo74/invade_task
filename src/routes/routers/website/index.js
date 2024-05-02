// ** import pages
import Home from "../../../pages/website/Home.jsx";
import Details from "../../../pages/website/Details.jsx";

// ** website routes
const websiteRoutes = [
    {
        path: "/",
        component: Home,
        layout: "default"
    },
    {
        path: "/details/:govId",
        component: Details,
        layout: "default"
    },
];

export default websiteRoutes;