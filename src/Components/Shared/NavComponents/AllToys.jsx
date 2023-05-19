import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';


const AllToys = () => {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
            <TabList>
                <Tab>Title 1</Tab>
                <Tab>Title 2</Tab>
                <Tab>Title 3</Tab>
                <Tab>Title 4</Tab>
            </TabList>
            <TabPanel>sssssssssssuuuuuuuuuuuiiiiiiiiiii</TabPanel>
            <TabPanel>2222222222222222</TabPanel>
            <TabPanel>333333333333</TabPanel>
            <TabPanel>444444444444444444</TabPanel>
        </Tabs>
    );
};

export default AllToys;