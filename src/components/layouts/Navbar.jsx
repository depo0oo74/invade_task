// ** Import hooks 
import { useEffect } from "react"

// ** Import logo image
import Logo from "../../assets/images/logos/logo.png"

// ** React router imports
import { Link, NavLink, useLocation } from "react-router-dom"

function Navbar() {
    // ** hooks
    const { pathname } = useLocation();

    // ** use effect function to handle scrolling top after every route
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <nav className="navbar">
            <div className="left-items">
                <Link className="btn logo-con" to="/">
                    <img src={Logo} className="logo" alt="logo-img" />
                </Link>
            </div>
            <div className="right-items">
                <ul>
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
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;