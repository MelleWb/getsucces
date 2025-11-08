import type { StoryObj } from "@storybook/nextjs";
import NavBar from "./NavBar";

export default {
    component: NavBar,
    parameters: {
        layout: "fullscreen",
    },
    tags: ["autodocs"],
    argTypes: {
        pageTitle: {
            control: "text",
            description: "Title of the page displayed in the NavBar",
        },
        navBarButtons: {
            control: "object",
            description: "Array of button components to display in the NavBar",
        },
        searchbar: {
            control: "object",
            description:
                "Optional searchbar component to be displayed in the NavBar",
        },
    },
};

export const WithThreeButtons: StoryObj<typeof NavBar> = {
    args: {
        pageTitle: "Home.inc",
        navBarButtons: [
            { text: "Nu boeken", size: "medium" },
            { text: "Contact", size: "medium" },
            { text: "Over ons", size: "medium" },
        ],
        searchbar: <div>Searchbar Component</div>,
    },
};

export const WithSingleButton: StoryObj<typeof NavBar> = {
    args: {
        pageTitle: "Home.inc",
        navBarButtons: [{ text: "Nu boeken", size: "medium" }],
        searchbar: <div>Searchbar Component</div>,
    },
};
