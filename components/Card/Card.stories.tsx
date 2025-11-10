import type { StoryObj } from "@storybook/nextjs";
import Card from "./Card";

export default {
    component: Card,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        imageSrc: {
            control: "text",
            description: "Source URL of the property image",
        },
        reviewNumber: {
            control: { type: "number", min: 0, max: 5, step: 0.1 },
            description: "Number of reviews for the property",
        },
        title: {
            control: "text",
            description: "Title of the property",
        },
        subtitle: {
            control: "text",
            description: "Subtitle or address of the property",
        },
        price: {
            control: "number",
            description: "Price of the property",
        },
        showButton: {
            control: "boolean",
            description: "Whether to show the 'View Details' button",
        },
    },
};

export const Primary: StoryObj<typeof Card> = {
    args: {
        imageSrc: "./house1.jpg",
        reviewNumber: 4.5,
        title: "Beautiful Family House",
        subtitle: "Marcobakkerstraat 12 - Amsterdam",
        price: 750000,
        showButton: true,
    },
};

export const WithoutButton: StoryObj<typeof Card> = {
    args: {
        imageSrc: "./house1.jpg",
        reviewNumber: 4.2,
        title: "Modern Apartment",
        subtitle: "Johan van Hasseltweg 45 - Amsterdam",
        price: 500000,
    },
};
