import React from 'react';
import { Link } from 'react-router-dom';

const BestToys = () => {
    return (
        <div>
            <div className="relative w-full">
                <img src='https://i.imgur.com/XrF59ay.jpg' className="w-full rounded-xl" />
                <div className="absolute rounded-xl flex justify-center items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-5 md:space-y-10 px-8 md:px-20 text-center'>
                        <h2 className='md:text-5xl text-xl font-bold '>We make your children happier with the best toys</h2>
                        <div>
                            <Link to='/allToys'><button className="button bg-[#57C5B6] mb-8">Explore Now </button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BestToys;