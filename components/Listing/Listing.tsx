import { FC } from "react";
import Button, { ButtonProps } from "../Button/Button";
import Card, { CardProps } from "../Card/Card";
import "./Listing.css";

export type ListingProps = {
    sectionHeader: string;
    sectionSubHeader: string;
    sectionButtons: ButtonProps[];
    sectionCard: CardProps[];
};

const Listing: FC<ListingProps> = ({
    sectionCard = [],
    sectionHeader,
    sectionSubHeader,
    sectionButtons = [],
}) => {
    return (
        <div className="listing">
            <div className="listing__header">
                <div className="listing__titles">
                    <p className="listing__title-header">{sectionHeader}</p>
                    <h3 className="listing__title-sub-header">
                        {sectionSubHeader}
                    </h3>
                </div>
                <div className="listing__button">
                    {sectionButtons.map((btn, idx) => (
                        <Button key={idx} {...btn} />
                    ))}
                </div>
            </div>
            <div className="listing__cards">
                {sectionCard.map((card, idx) => (
                    <Card key={idx} {...card} />
                ))}
            </div>
        </div>
    );
};

export default Listing;
