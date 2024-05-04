// ** Import hooks 
import { useState, useEffect } from "react";

// ** Import logo image
import Logo from "../../assets/images/logos/logo.png";

// ** React router imports
import { Link, NavLink, useLocation } from "react-router-dom";

// ** Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    // ** hooks
    const { pathname } = useLocation();

    // ** states
    const [navToggle, setNavToggle] = useState(false);

    // ** use effect function to handle scrolling top after every route
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    // ** function to handle navbar toggle 
    const handleNavToggle = () => {
        setNavToggle(!navToggle);
    }

    return (
        <nav className="navbar">
            <div className="left-items">
                <Link className="btn logo-con" to="/">
                    <img src={Logo} className="logo" alt="logo-img" />
                </Link>
            </div>
            <div className="right-items">
                <ul style={navToggle ? {insetInlineStart: "0px"} : {insetInlineStart: "-150px"}}>
                    <li>
                        <NavLink className="btn" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="btn" to="/about">About us</NavLink>
                    </li>
                    <li>
                        <NavLink className="btn" to="/contact">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink className="btn" to="/faqs">FAQs</NavLink>
                    </li>
                    <button className="mobileNavBarClose" onClick={handleNavToggle}>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                </ul>
                <button className="mobileNavBarOpen" onClick={handleNavToggle}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </nav>
    )
}

export default Navbar;