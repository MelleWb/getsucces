import { FC } from "react";
import Button, { ButtonProps } from "../Button/Button";
import Image from "next/image";
import Link from "next/link";
import "./Card.css";

export type CardProps = {
    imageSrc: string;
    reviewNumber?: number;
    title: string;
    subtitle?: string;
    price?: number;
    showButton?: boolean;
};

const Card: FC<CardProps> = ({
    imageSrc,
    reviewNumber,
    title,
    subtitle,
    price,
    showButton,
}) => {
    const id = subtitle
        ?.toLowerCase()
        .replace(/\s+/g, "")
        .replace(/[^a-z0-9]/g, "");

    return (
        <Link href={`/detailpage/${id}`} className="card">
            <div className="card__image-container">
                {imageSrc && (
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="card__image"
                    />
                )}
                {reviewNumber && (
                    <div className="card__reviewnumber">{reviewNumber}</div>
                )}
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
            {showButton && (
                <div className="card__button">
                    <Button text="Bekijk details" size="medium" />
                </div>
            )}
        </Link>
    );
};

export default Card;
