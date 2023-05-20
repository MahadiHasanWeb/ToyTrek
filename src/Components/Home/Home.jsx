import Banner from "./Banner";
import BestToys from "./BestToys";
import Gallery from "./Gallery";
import TabSection from "./TabSection/TabSection";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Gallery></Gallery>
            <TabSection></TabSection>
            <BestToys></BestToys>
        </div>
    );
};

export default Home;