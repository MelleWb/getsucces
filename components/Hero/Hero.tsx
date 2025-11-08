import { FC } from "react";
import Button, { ButtonProps } from "../Button/Button";
import Image from "next/image";
import "./Hero.css";

export type CardProps = {
    imageSrc: string;
    title: string;
    subtitle?: string;
    link?: ButtonProps;
    heroBarButtons?: ButtonProps[];
    agentName?: string;
    agentImageSrc?: string;
};

const Hero: FC<CardProps> = ({
    imageSrc,
    title,
    subtitle,
    link,
    heroBarButtons = [],
    agentName,
    agentImageSrc,
}) => {
    return (
        <div className="hero">
            <div className="hero__call-to-action">
                <h1 className="hero__call-to-action-title">{title}</h1>
                <p className="hero__call-to-action-subtitle">{subtitle}</p>
                <div className="hero_call-to-action-button">
                    {link && <Button {...link} />}
                </div>
            </div>
            <div className="hero__image-and-agent">
                <div className="hero__image-container">
                    {imageSrc && (
                        <Image
                            src={imageSrc}
                            alt={title}
                            fill
                            className="hero__image"
                        />
                    )}
                </div>
                {/* <div className="hero__agent-information">
                    <Image
                        src={agentImageSrc}
                        alt={agentName}
                        width={50}
                        height={50}
                        className="hero__agent-image"
                    />
                    <span className="hero__agent-name">{agentName}</span>
                    <div className="hero__agent-button">
                        {heroBarButtons.map((btn, idx) => (
                            <Button key={idx} {...btn} />
                        ))} */}
                {/* </div>
                </div> */}
            </div>
        </div>
    );
};

export default Hero;
