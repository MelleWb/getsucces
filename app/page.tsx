import "./global.css";
import NavBar from "@/components/NavBar/NavBar";
import WebsiteMain from "./WebsiteMain";
import Footer from "@/components/Footer/Footer";

const page = () => {
    return (
        <>
            <div className="page-container">
                <NavBar
                    pageTitle="Home.inc"
                    navBarButtons={[
                        { text: "Nu boeken", href: "/boeken" },
                        { text: "Contact", href: "/contact" },
                        { text: "Over ons", href: "/overons" },
                    ]}
                ></NavBar>
                <WebsiteMain />
            </div>
            <Footer
                footerTitle="Home.inc, Uw vertrouwde partner in onroerend goed"
                footerLinksServiceTitle="Service"
                footerLinksService={[
                    { text: "Over ons", href: "/overons" },
                    { text: "Services", href: "/services" },
                    { text: "Contact", href: "/contact" },
                    { text: "Privacy", href: "/privacy" },
                    { text: "Copyright", href: "/Copyright" },
                ]}
                footerLinksAboutTitle="Over deze site"
                footerLinksAbout={[
                    { text: "Ons Verhaal", href: "/our-story" },
                    { text: "Ons Team", href: "/team" },
                    { text: "Werken bij ons", href: "/careers" },
                ]}
            ></Footer>
        </>
    );
};

export default page;
