import type { StoryObj } from "@storybook/nextjs";
import Listing from "./Listing";

export default {
    component: Listing,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        sectionHeader: {
            control: "text",
            description: "Header text for the listing section",
        },
        sectionSubHeader: {
            control: "text",
            description: "Subheader text for the listing section",
        },
        sectionButtons: {
            control: "object",
            description:
                "Array of button properties to be displayed in the listing section",
        },
        sectionCard: {
            control: "object",
            description:
                "Array of card properties to be displayed in the listing section",
        },
    },
};

export const Primary: StoryObj<typeof Listing> = {
    args: {
        sectionHeader: "Ontdenk onze huizen",
        sectionSubHeader: "Toekomstige woningen laag in prijs",
        sectionButtons: [{ text: "Bekijk alle huizen", size: "medium" }],
        sectionCard: [
            {
                imageSrc: "../house1.jpg",
                title: "Beautiful Family House",
                reviewNumber: 4.5,
                subtitle: "Marcobakkerstraat 12 - Amsterdam",
                price: 750000,
                link: { text: "Nu boeken", size: "medium" },
            },
            {
                imageSrc: "../house1.jpg",
                title: "Beautiful Family House",
                reviewNumber: 4.5,
                subtitle: "Marcobakkerstraat 12 - Amsterdam",
                price: 750000,
                link: { text: "Nu boeken", size: "medium" },
            },
            {
                imageSrc: "../house1.jpg",
                title: "Beautiful Family House",
                reviewNumber: 4.5,
                subtitle: "Marcobakkerstraat 12 - Amsterdam",
                price: 750000,
                link: { text: "Nu boeken", size: "medium" },
            },
        ],
    },
};
