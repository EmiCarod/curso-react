import { Link } from "react-router-dom";

const Header = function () {
    return (
        <header>
            <Link to={"/"}>
                <h1>
                    Prendas & Tablas
                </h1>
            </Link>
        </header>
    );
};

export default Header;