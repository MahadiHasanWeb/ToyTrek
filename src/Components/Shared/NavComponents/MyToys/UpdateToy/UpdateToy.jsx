import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Select from 'react-select';
import Swal from 'sweetalert2';


const UpdateToy = () => {

    const toyData = useLoaderData();
    const { ToyPicture, details, rating, ToyName, Price, quantity, _id } = toyData;

    const [selectedOption, setSelectedOption] = useState(null);

    const handleUpdateToy = event => {
        event.preventDefault();
        const form = event.target;
        const ToyName = form.name.value;
        const quantity = form.quantity.value;
        const details = form.details.value;
        const Price = form.Price.value;
        const rating = form.rating.value;
        const ToyPicture = form.photo.value;
        const UpdateToy = { ToyName, quantity, ToyPicture, Price, details, rating }

        UpdateToy.subCategory = selectedOption;

        fetch(`http://localhost:5000/toy/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(UpdateToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy Details Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })
    }

    const options = [
        { value: "SportsCar", label: "SportsCar" },
        { value: "Truck", label: "Truck" },
        { value: "RegularCar", label: "RegularCar" },
        { value: "Bike", label: "Bike" },
    ];

    return (
        <div className="p-6 md:p-8 bg-[#F4F3F0]">
            <h1 className="text-4xl text-center font-semibold mb-8">Update Your Toys </h1>
            <form onSubmit={handleUpdateToy}>
                <div className="md:flex justify-center items-center md:gap-10 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Toy Name" defaultValue={ToyName} name="name" className="input input-bordered w-full" required />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="number" placeholder="Available Quantity" defaultValue={quantity} name="quantity" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <div className="md:flex justify-center items-center md:gap-10 mb-8">


                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Ratings</span>
                        </label>
                        <label className="input-group">
                            <input type="number" placeholder="Out of 5" defaultValue={rating} name="rating" className="input input-bordered w-full" required />
                        </label>
                    </div>


                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <label className="input-group">
                            <input type="number" placeholder="Toy Price" defaultValue={Price} name="Price" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <div className="md:flex justify-center items-center md:gap-10 mb-8">

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={ToyPicture} placeholder="https://i.ibb.co/PGqMPr9/11.png" name="photo" className="input input-bordered w-full " required />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={details} placeholder="Toy Details Write Here" name="details" className="input input-bordered w-full" required />
                        </label>
                    </div>
                </div>
                <div className="md:flex justify-center items-center md:gap-10 mb-8">
                    <div className="form-control w-full md:w-2/3 ">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <Select
                            className=""
                            defaultValue={selectedOption}
                            onChange={setSelectedOption}
                            options={options}
                            isMulti
                        />
                    </div>
                </div>
                <button type="submit" className="button button-primary btn-block">Update Toy</button>

            </form>
        </div>
    );
};

export default UpdateToy;