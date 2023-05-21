import Banner from "./Banner";
import BestToys from "./BestToys";
import Gallery from "./Gallery";
import HappyCustomer from "./HappyCustomer/HappyCustomer";
import TabSection from "./TabSection/TabSection";


const Home = () => {
    return (
        <div className="">
            <Banner></Banner>
            <Gallery></Gallery>
            <TabSection></TabSection>
            <BestToys></BestToys>
            <HappyCustomer></HappyCustomer>
        </div>
    );
};

export default Home;