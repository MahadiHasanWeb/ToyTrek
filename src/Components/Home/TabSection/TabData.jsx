import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const TabData = ({ data }) => {

    const { ToyName, Price, ToyPicture, rating } = data;

    return (
        <div className="card w-96 glass">
            <figure><img src={ToyPicture} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{ToyName}</h2>
                <p className='flex items-center gap-1'>{rating} <FaStar className='text-[#1d1b11]'/></p>
                <p>Price: ${Price}</p>
                <div className="card-actions justify-end">
                <Link to='/login' className="btn border-none button-second">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default TabData;