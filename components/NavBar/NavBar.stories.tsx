import type { StoryObj } from "@storybook/nextjs";
import NavBar from "./NavBar";

export default {
    component: NavBar,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        pageTitle: {
            control: "text",
            description: "Title displayed in the navigation bar",
        },
        navBarButtons: {
            control: "object",
            description:
                "Array of navigation button objects to be displayed in the navigation bar",
        },
        searchbar: {
            control: "object",
            description: "Optional search bar component to be included",
        },
    },
};

export const WithThreeButtons: StoryObj<typeof NavBar> = {
    args: {
        pageTitle: "Home.inc",
        navBarButtons: [
            { text: "Nu boeken", href: "/boeken" },
            { text: "Contact", href: "/contact" },
            { text: "Over ons", href: "/overons" },
        ],
    },
};

export const WithSingleButton: StoryObj<typeof NavBar> = {
    args: {
        pageTitle: "Home.inc",
        navBarButtons: [{ text: "Nu boeken", href: "/boeken" }],
    },
};
