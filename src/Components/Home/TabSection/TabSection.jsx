import { useEffect, useState } from "react";
import TabData from "./TabData";

const TabSection = () => {
    // const [jobs, setJob] = useState([]);
    const [activeTab, setActiveTab] = useState("SportsCar");
    const [Toys, setToys] = useState([]);
    // console.log(tabIndex)

    useEffect(() => {
        fetch('https://toys-server.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    const category = Toys?.filter((Toy) => Toy.subCategory[0].value === activeTab)
    // console.log(category);

    const handleTabClick = (id) => {
        setActiveTab(id);
    };

    return (
        <section className="mb-12">
            <h3 className="text-center text-4xl font-bold my-8 md:mb-20">Shop by category</h3>
            <div className="max-w-2xl mx-auto">
                <div className="border-b border-gray-200 dark:border-gray-700 mb-4">
                    <section className="flex flex-wrap -mb-px justify-center">
                        <section className="mr-2">
                            <button
                                onClick={() => handleTabClick("SportsCar")}
                                className={`tabBtn ${activeTab == "SportsCar" ? " bg-[#57C5B6] text-white" : ""
                                    }`} >Sports car</button>
                        </section>
                        <section className="mr-2">
                            <button
                                onClick={() => handleTabClick("RegularCar")}
                                className={`tabBtn ${activeTab == "RegularCar" ? " bg-[#57C5B6] text-white" : ""
                                    }`}>Regular car</button>
                        </section>
                        <section className="mr-2">
                            <button
                                onClick={() => handleTabClick("Truck")}
                                className={`tabBtn ${activeTab == "Truck" ? " bg-[#57C5B6] text-white" : ""
                                    }`}  >Truck</button>
                        </section>
                    </section>
                </div>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center mx-auto">
                {
                    category?.slice(0, 3).map(data => <TabData
                        key={data._id}
                        data={data}
                    ></TabData>)
                }
            </div>
        </section>
    );
};

export default TabSection;