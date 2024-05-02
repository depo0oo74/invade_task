// ** React router imports
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="footer">
            <p>© 2024, <Link to="/" className="btn">invade-task</Link></p>
        </footer>
    )
}

export default Footer;