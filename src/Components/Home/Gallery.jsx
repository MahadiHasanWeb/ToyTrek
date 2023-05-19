import React from 'react';

const Gallery = () => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="flex w-full mb-20 flex-wrap">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">Welcome to the ToyTrek Gallery</h1>
                    <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">Where Miniature Marvels Come to Life! Explore captivating images of our exquisite collection, featuring sleek sports cars, rugged off-road vehicles, and more. Marvel at the intricate details and realistic designs that make these toy cars truly special.</p>
                </div>
                <div className="flex flex-wrap md:-m-2 -m-1">
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.imgur.com/e6Oqoto.jpg"/>
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.imgur.com/emtxdgk.jpg"/>
                        </div>
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.imgur.com/3tVJmsj.jpg"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-1/2">
                        <div className="md:p-2 p-1 w-full">
                            <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://i.imgur.com/sZCBNR9.jpg"/>
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.imgur.com/hH5FBCJ.jpg"/>
                        </div>
                        <div className="md:p-2 p-1 w-1/2">
                            <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://i.imgur.com/51m6C1E.jpg"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Gallery;