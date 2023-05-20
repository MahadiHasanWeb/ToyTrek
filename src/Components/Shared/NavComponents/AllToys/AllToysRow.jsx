import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ RowData }) => {
    // console.log(RowData)
    const { SellerName, ToyName, Price, quantity, subCategory } = RowData;

    return (
        <tr className="hover">
            <th></th>
            <td>{SellerName}</td>
            <td>{ToyName}</td>
            <td>{subCategory[0].value}</td>
            <td>{Price}</td>
            <td>{quantity}</td>
            <td><Link to='/login' className="btn button-primary btn-xs bg-[#6F69AC]">View Details button</Link></td>
        </tr>
    );
};

export default AllToysRow;