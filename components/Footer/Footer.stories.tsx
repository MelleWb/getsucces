import type { StoryObj } from "@storybook/nextjs";
import Footer from "./Footer";

export default {
    component: Footer,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        footerTitle: {
            control: "text",
            description: "Title displayed in the footer",
        },
        footeraboutText: {
            control: "text",
            description: "Optional about text displayed in the footer",
        },
        footerLinksServiceTitle: {
            control: "text",
            description: "Title for the services links section",
        },
        footerLinksService: {
            control: "object",
            description:
                "Array of service link objects to be displayed in the footer",
        },
        footerLinksAboutTitle: {
            control: "text",
            description: "Title for the about links section",
        },
        footerLinksAbout: {
            control: "object",
            description:
                "Array of about link objects to be displayed in the footer",
        },
    },
};

export const DefaultFooter: StoryObj<typeof Footer> = {
    args: {
        footerTitle: "Home.inc, Uw vertrouwde partner in onroerend goed",
        footerLinksServiceTitle: "Services",
        footerLinksService: [
            { text: "About Us", href: "/about" },
            { text: "Services", href: "/services" },
            { text: "Contact", href: "/contact" },
            { text: "Privacy Policy", href: "/privacy" },
            { text: "Terms of Service", href: "/terms" },
        ],
        footerLinksAboutTitle: "About",
        footerLinksAbout: [
            { text: "Our Story", href: "/our-story" },
            { text: "Team", href: "/team" },
            { text: "Careers", href: "/careers" },
            { text: "Blog", href: "/blog" },
        ],
    },
};
