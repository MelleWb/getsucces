import { FC } from "react";
import "./Footer.css";

export type FooterProps = {
    footerTitle: string;
    footeraboutText?: string;
    footerLinksServiceTitle: string;
    footerLinksService: { text: string; href: string }[];
    footerLinksAboutTitle: string;
    footerLinksAbout: { text: string; href: string }[];
};

const ChevronRightIcon = () => (
    <svg
        className="footer__chevron"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 10 10"
        width="10"
        height="10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M3 1l4 4-4 4" />
    </svg>
);

const Footer: FC<FooterProps> = ({
    footerTitle,
    footeraboutText,
    footerLinksService,
    footerLinksServiceTitle,
    footerLinksAbout,
    footerLinksAboutTitle,
}) => {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <div className="footer__left">
                    <h1 className="footer__title">{footerTitle}</h1>
                    {footeraboutText && (
                        <p className="footer__about">{footeraboutText}</p>
                    )}
                </div>
                <div className="footer__right">
                    <div className="footer__section-service">
                        <h2 className="footer__section-title">
                            {footerLinksServiceTitle}
                        </h2>
                        <ul className="footer__list">
                            {footerLinksService.map((link, index) => (
                                <li key={index} className="footer__list-item">
                                    <a
                                        href={link.href}
                                        className="footer__link"
                                    >
                                        <ChevronRightIcon />
                                        {link.text}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {footerLinksAbout && (
                        <div className="footer__section-about">
                            <h2 className="footer__section-title">
                                {footerLinksAboutTitle}
                            </h2>
                            <ul className="footer__list">
                                {footerLinksAbout.map((link, index) => (
                                    <li
                                        key={index}
                                        className="footer__list-item"
                                    >
                                        <a
                                            href={link.href}
                                            className="footer__link"
                                        >
                                            <ChevronRightIcon />
                                            {link.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
