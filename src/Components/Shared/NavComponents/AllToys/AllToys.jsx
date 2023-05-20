import React, { useEffect, useState } from 'react';
import AllToysRow from './AllToysRow';

const AllToys = () => {

    const [toyData, setToyData] = useState();

    useEffect(() => {
        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setToyData(data))
    }, [])

    // console.log(toyData)

    return (
        <div className="overflow-x-auto ">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Seller</th>
                        <th>Toy Name</th>
                        <th>Sub-category</th>
                        <th>Price</th>
                        <th>Available Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toyData?.slice(0, 20).map(RowData => <AllToysRow
                            key={RowData._id}
                            RowData={RowData}
                        ></AllToysRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;