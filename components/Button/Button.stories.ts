import { StoryObj } from "@storybook/nextjs";
import Button from "./Button";

export default {
    component: Button,
    tags: ["autodocs"],
    parameters: {
        layout: "centered",
    },
    text: {
        type: {
            name: "string",
            required: true,
        },
        description: "Text to be displayed on the button",
    },
    type: {
        control: "select",
        options: ["button", "submit", "reset"],
        description: "Type attribute for the button element",
    },
    href: {
        control: "text",
        description: "Optional link URL (renders as anchor when provided)",
    },
    size: {
        control: "select",
        options: ["small", "medium", "large"],
        description: "Size of the button",
    },
    hasIconOnly: {
        control: "boolean",
        description: "Whether the button only contains an icon",
    },
    isloading: {
        control: "boolean",
        description: "Shows a loading indicator when true",
    },
};

export const buttonSmall: StoryObj<typeof Button> = {
    args: {
        text: "Click Me",
        type: "button",
        size: "small",
        hasIconOnly: false,
        isloading: false,
    },
};

export const buttonMedium: StoryObj<typeof Button> = {
    args: {
        text: "Click Me",
        type: "button",
        size: "medium",
        hasIconOnly: false,
        isloading: false,
    },
};

export const buttonLarge: StoryObj<typeof Button> = {
    args: {
        text: "Click Me",
        type: "button",
        size: "large",
        hasIconOnly: false,
        isloading: false,
    },
};

// export const Primary: Story = {
//     args: {
//         primary: true,
//         label: "Button",
//     },
// };

// export const Secondary: Story = {
//     args: {
//         label: "Button",
//     },
// };

// export const Large: Story = {
//     args: {
//         size: "large",
//         label: "Button",
//     },
// };

// export const Small: Story = {
//     args: {
//         size: "small",
//         label: "Button",
//     },
// };
