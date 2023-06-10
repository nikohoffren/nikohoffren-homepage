import { useState, useContext } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import { LanguageContext } from "./LanguageContext";

interface CustomLinkProps {
    to: string;
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

interface NavbarProps {
    theme: string;
    toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
    const { language, setLanguage } = useContext(LanguageContext);
    const [isOpen, setIsOpen] = useState(false);
    const toggleSideNav = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <nav className={`nav ${theme === "dark" ? "dark" : ""}`}>
                <div className={`${!isOpen ? "nav-links" : "nav-links-2"}`}>
                    <i className="fa fa-times" onClick={toggleSideNav}></i>
                    <ul>
                        <CustomLink
                            to="/"
                            className="site-title"
                            onClick={toggleSideNav}
                        >
                            <img src="NHlogoTransparent.png" alt="" />
                        </CustomLink>
                        <li onClick={toggleSideNav}>
                            <CustomLink to="/music">
                                {language === "en" ? "MUSIC" : "MUSIIKKI"}
                            </CustomLink>
                        </li>
                        <li onClick={toggleSideNav}>
                            <CustomLink to="/videos">
                                {language === "en" ? "VIDEOS" : "VIDEOT"}
                            </CustomLink>
                        </li>
                        <li onClick={toggleSideNav}>
                            <CustomLink to="/gear">
                                {language === "en" ? "GEAR" : "SOITTIMET"}
                            </CustomLink>
                        </li>
                        <li onClick={toggleSideNav}>
                            <CustomLink to="/portfolio">PORTFOLIO</CustomLink>
                        </li>
                        <li>
                            <LanguageSelector setLanguage={setLanguage} />
                        </li>
                        <button onClick={toggleTheme} className="toggle-theme-button">
                            {theme === "light" ? (
                                <img src="/sun.png" alt="Sun png image" onClick={toggleSideNav} />
                            ) : (
                                <img src="/moon.png" alt="Moon png image" onClick={toggleSideNav} />
                            )}
                        </button>
                    </ul>
                </div>
                <i className="fa fa-bars right" onClick={toggleSideNav}></i>
            </nav>
        </>
    );
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
        <Link to={to} className={isActive ? "active" : ""} {...props}>
            {children}
        </Link>
    );
}
