import type { StoryObj } from "@storybook/nextjs";
import Hero from "./Hero";

export default {
    component: Hero,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        imageSrc: {
            control: "text",
            description: "Source URL of the hero image",
        },
        title: {
            control: "text",
            description: "Main title text in the hero section",
        },
        subtitle: {
            control: "text",
            description: "Subtitle text in the hero section",
        },
        link: {
            control: "object",
            description: "Button link properties for the call-to-action",
        },
        heroBarButtons: {
            control: "object",
            description: "Array of button properties for the hero bar",
        },
        agentName: {
            control: "text",
            description: "Name of the real estate agent",
        },
        agentImageSrc: {
            control: "text",
            description: "Source URL of the agent's image",
        },
    },
};

export const Primary: StoryObj<typeof Hero> = {
    args: {
        imageSrc: "../house2.jpg",
        title: "koop/huur jouw droomhuis",
        subtitle: "Ontdek de beste huizen in jouw favoriete locaties.",
        link: { text: "Bekijk huizen", size: "large" },
        // agentName: "Jan de Vries",
        // agentImageSrc: "/person.png",
        // heroBarButtons: [
        //     { text: "Huizen", size: "medium" },
        //     { text: "Locaties", size: "medium" },
        // ],
    },
};
