import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card";
import Information from "../components/Information/Information";
import Listing from "@/components/Listing/Listing";

const WebsiteMain = () => {
    return (
        <main>
            <div>
                <Hero
                    imageSrc="/house2.jpg"
                    title="koop/huur jouw droomhuis"
                    subtitle="Ontdek de beste huizen in jouw favoriete locaties."
                    agentName="Jan de Vries"
                    link={{ text: "Bekijk huizen", size: "large" }}
                    // agentImageSrc="/person.png"
                    // heroBarButtons={[
                    //     { text: "Huizen", size: "medium" },
                    //     { text: "Locaties", size: "medium" },
                    // ]}
                ></Hero>
            </div>
            <div>
                <Listing
                    sectionHeader="Ontdenk onze huizen"
                    sectionSubHeader="Toekomstige woningen laag in prijs"
                    sectionButtons={[
                        { text: "Alle huizen bekijken", size: "medium" },
                    ]}
                    sectionCard={[
                        {
                            imageSrc: "/house1.jpg",
                            title: "Beautiful Family House",
                            reviewNumber: 4.5,
                            subtitle: "Marcobakkerstraat 12 - Amsterdam",
                            price: 750000,
                            link: { text: "Nu boeken", size: "medium" },
                        },
                        {
                            imageSrc: "/house1.jpg",
                            title: "Beautiful Family House",
                            reviewNumber: 4.5,
                            subtitle: "Marcobakkerstraat 12 - Amsterdam",
                            price: 750000,
                            link: { text: "Nu boeken", size: "medium" },
                        },
                        {
                            imageSrc: "/house1.jpg",
                            title: "Beautiful Family House",
                            reviewNumber: 4.5,
                            subtitle: "Marcobakkerstraat 12 - Amsterdam",
                            price: 750000,
                            link: { text: "Nu boeken", size: "medium" },
                        },
                    ]}
                ></Listing>
            </div>
            <Information
                title="Waarom kiezen voor ons?"
                subTitle="Bij Home.inc, geloven wij dat architectuur meer is dan het alleen bouwen van huizen. Het gaat om het creëren van ruimtes die inspireren, verbinden en een gevoel van thuis bieden. Met jarenlange ervaring en een passie voor design, zetten wij ons in om jouw droomhuis werkelijkheid te maken."
                achievements={[
                    { number: "500+", title: "Tevreden klanten" },
                    { number: "1200+", title: "Verkochte huizen" },
                    { number: "50+", title: "Ervaren agenten" },
                    { number: "15+", title: "Landen waar wij actief zijn" },
                ]}
            ></Information>
        </main>
    );
};
export default WebsiteMain;
