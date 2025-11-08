import { FC, ReactNode } from "react";
import Button, { ButtonProps } from "../Button/Button";
import "./NavBar.css";

export type NavBarProps = {
    pageTitle: string;
    navBarButtons?: ButtonProps[];
    searchbar?: ReactNode;
};

const NavBar: FC<NavBarProps> = ({
    pageTitle,
    navBarButtons = [],
    searchbar,
}) => {
    return (
        <nav className="nav-bar">
            <div className="nav-bar__inner">
                <h1 className="nav-bar__page-title">{pageTitle}</h1>
                <div className="nav-bar__buttons">
                    {navBarButtons.map((btn, idx) => (
                        <Button key={idx} {...btn} />
                    ))}
                </div>
                {searchbar && (
                    <div className="nav-bar__search-bar">{searchbar}</div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
