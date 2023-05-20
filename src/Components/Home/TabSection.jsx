import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';

const TabSection = () => {
    const [tabIndex, setTabIndex] = useState(0);
    console.log(tabIndex)
    return (
        <section className="mb-12">
            <h3 className="text-center text-6xl font-bold my-8 md:my-20">Shop by category</h3>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList >
                    <Tab>Sports Car</Tab>
                    <Tab>RegularCar</Tab>
                    <Tab>Truck</Tab>
                </TabList>
                <TabPanel>sssssssssssuuuuuuuuuuuiiiiiiiiiii</TabPanel>
                <TabPanel>2222222222222222</TabPanel>
                <TabPanel>333333333333</TabPanel>
            </Tabs>
        </section>
    );
};

export default TabSection;