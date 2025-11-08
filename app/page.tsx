import "./global.css";
import NavBar from "@/components/NavBar/NavBar";
import WebsiteMain from "./WebsiteMain";

const page = () => {
    return (
        <div className="page-container">
            <header>
                <NavBar
                    pageTitle="Home.inc"
                    navBarButtons={[
                        { text: "Huizen", size: "medium" },
                        { text: "Locaties", size: "medium" },
                        { text: "Contact", size: "medium" },
                    ]}
                    searchbar={<div>test searchbar</div>}
                ></NavBar>
            </header>
            <WebsiteMain />
            <footer>test footer</footer>
        </div>
    );
};

export default page;
