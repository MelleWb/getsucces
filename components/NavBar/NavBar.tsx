import { FC } from "react";
import "./NavBar.css";

export type NavBarProps = {
    pageTitle: string;
    navBarButtons: { text: string; href: string }[];
};

const SearchIcon = () => (
    <svg
        className="search-bar__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const NavBar: FC<NavBarProps> = ({ pageTitle, navBarButtons }) => {
    return (
        <header className="nav-bar">
            <h1 className="nav-bar__page-title">{pageTitle}</h1>
            <ul className="nav-bar__buttons">
                {navBarButtons.map((link, index) => (
                    <li key={index} className="nav-bar__list-item">
                        <a href={link.href} className="nav-bar__link">
                            {link.text}
                        </a>
                    </li>
                ))}
            </ul>
            <div className="search-bar">
                <input
                    type="text"
                    className="search-bar__input"
                    placeholder="Zoeken..."
                />
                <button className="search-bar__button" aria-label="Search">
                    <SearchIcon />
                </button>
            </div>
        </header>
    );
};

export default NavBar;
