import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from '../../../../Hooks/useTitle';

const SingleToy = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    useTitle('Toy Details')

    const toyData = useLoaderData()
    // console.log(toyData)

    const { SellerName, SellerEmail, ToyPicture, details, rating, ToyName, Price, quantity, subCategory, _id, } = toyData;

    return (
        <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">TOY NAME</h2>
                        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{ToyName}</h1>
                        <div className="flex mb-4">
                            <a className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Details</a>
                        </div>
                        <p className="leading-relaxed mb-4">{details}</p>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Quantity</span>
                            <span className="ml-auto text-gray-900">{quantity}</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Rating</span>
                            <span className="ml-auto text-gray-900">{rating}</span>
                        </div>
                        <div className="flex border-t border-gray-200 py-2">
                            <span className="text-gray-500">Seller Name</span>
                            <span className="ml-auto text-gray-900">{SellerName}</span>
                        </div>
                        <div className="flex border-t border-b mb-6 border-gray-200 py-2">
                            <span className="text-gray-500">Seller Email</span>
                            <span className="ml-auto text-gray-900">{SellerEmail}</span>
                        </div>
                        <div className="flex">
                            <span className="title-font font-medium text-2xl text-gray-900">${Price}</span>
                            <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Buy Now</button>
                        </div>
                    </div>
                    <img alt="ecommerce" data-aos="fade-left" data-aos-anchor="#example-anchor" data-aos-offset="500" data-aos-duration="500" className="lg:w-1/2 w-full h-64 md:h-80 object-cover object-center rounded" src={ToyPicture} />
                </div>
            </div>
        </section>
    );
};

export default SingleToy;