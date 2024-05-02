// ** Router imports
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import routes from "./routers/index";

// ** Import layouts components
import Main from "../components/layouts/Main.jsx"
import Navbar from "../components/layouts/Navbar.jsx";
import Footer from "../components/layouts/Footer.jsx";

// ** Import Not Found Page
import NotFound from "../pages/errors/NotFound";

const Router = () => {
  // ** Website routes
  const websiteRoutes = routes.filter((ele) => ele.layout === "default");

  // ** Website layout
  function defaultLayout() {
    return (
      <>
        <Main />
        <Navbar />
        <Outlet />
        <Footer />
      </>
    );
  }


  return (
    <BrowserRouter>
      <Routes>

        {/* If user authenticated */}
        <Route path="/" element={defaultLayout()}>
          {websiteRoutes.map((ele, index) => (
            <Route key={index} exact path={ele.path} element={<ele.component />} />
          ))}
        </Route>
        

        {/* If route is fault redirect to not found page */}
        <Route path="*" element={defaultLayout()}>
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
};

export default Router;
