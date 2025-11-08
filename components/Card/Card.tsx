import { FC } from "react";
import Button, { ButtonProps } from "../Button/Button";
import Image from "next/image";
import "./Card.css";

export type CardProps = {
    imageSrc: string;
    reviewNumber?: number;
    title: string;
    subtitle?: string;
    price?: number;
    link?: ButtonProps;
};

const Card: FC<CardProps> = ({
    imageSrc,
    reviewNumber,
    title,
    subtitle,
    price,
    link,
}) => {
    return (
        <div className="card">
            <div className="card__image-container">
                {imageSrc && (
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="card__image"
                    />
                )}
                <div className="card__reviewnumber">{reviewNumber}</div>
            </div>
            <div className="card__body">
                <h2 className="card__title">{title}</h2>
                <p className="card__subtitle">{subtitle}</p>
                <div className="card__price">
                    {price?.toLocaleString("nl-NL", {
                        style: "currency",
                        currency: "EUR",
                        minimumFractionDigits: 0,
                    })}
                </div>
            </div>
            <div className="card__button">{link && <Button {...link} />}</div>
        </div>
    );
};

export default Card;
