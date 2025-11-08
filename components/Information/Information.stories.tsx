import type { StoryObj } from "@storybook/nextjs";
import Information from "./Information";

export default {
    component: Information,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        title: {
            control: "text",
            description: "Main title text for the information section",
        },
        subTitle: {
            control: "text",
            description: "Subtitle text for the information section",
        },
        achievements: {
            control: "object",
            description:
                "Array of achievement objects, each containing a number and title",
        },
    },
};

export const Primary: StoryObj<typeof Information> = {
    args: {
        title: "Waarom kiezen voor ons?",
        subTitle:
            "Bij Home.inc, geloven wij dat architectuur meer is dan het alleen bouwen van huizen. Het gaat om het creëren van ruimtes die inspireren, verbinden en een gevoel van thuis bieden. Met jarenlange ervaring en een passie voor design, zetten wij ons in om jouw droomhuis werkelijkheid te maken.",
        achievements: [
            { number: "500+", title: "Tevreden klanten" },
            { number: "1200+", title: "Verkochte huizen" },
            { number: "50+", title: "Ervaren agenten" },
            { number: "15+", title: "Landen waar wij actief zijn" },
        ],
    },
};
