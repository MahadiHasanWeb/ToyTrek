import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthenticationPart/AuthProvider';
import MyDataRow from './MyDataRow';

const MyToys = () => {

    const { user } = useContext(AuthContext);


    const [myToys, setMyToys] = useState([])
    console.log(myToys)

    useEffect(() => {
        fetch(`https://toys-server.vercel.app/myToys/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [])

    return (
        <div>
            <h1 className="text-center text-4xl">My Toys</h1>
            <div className="overflow-x-auto ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Image</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>Rating</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys?.slice(0, 20).map(RowData => <MyDataRow
                                key={RowData._id}
                                RowData={RowData}
                                setMyToys={setMyToys}
                                myToys={myToys}
                            ></MyDataRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;