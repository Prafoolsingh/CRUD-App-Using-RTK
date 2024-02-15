import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createUser } from '../features/userDetailSlice'
import Swal from "sweetalert2"; 
import { useNavigate } from "react-router-dom"; 

function Create() {
    // State for storing user input data
    const [users, setUsers] = useState({});
    
    // Redux dispatch hook
    const dispatch = useDispatch();

    // Navigate hook for navigation
    const navigate = useNavigate();

    // Function to handle user input change
    const getUserData = (e) => {
        setUsers({ ...users, [e.target.name]: e.target.value });
    }

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Dispatching createUser action with user data
        dispatch(createUser(users));

        // Showing success message with SweetAlert
        Swal.fire({
            icon: "success",
            title: "Posted",
            text: "You have successfully posted data to an API",
        });

        // Navigating to read page after successful submission
        navigate("/read");
    }

    return (
        <form onSubmit={handleSubmit} className='w-50 mx-auto mt-5 p-5 bg-black text-white rounded-5 shadow-lg'>

            <div className="form-group mt-2">
                <label className='my-2' htmlFor="exampleInputPassword1">Name</label>
                <input onChange={getUserData} type="text" name='name' className="form-control" id="exampleInputPassword1" placeholder="Enter name here" />
            </div>

            <div className="form-group mt-2">
                <label className='my-2' htmlFor="exampleInputEmail1">Email address</label>
                <input onChange={getUserData} type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>

            <div className="form-group my-3">
                <label htmlFor="age" className='my-2'>Age</label>
                <input onChange={getUserData} type="number" name='age' className="form-control" id="age" placeholder="Age" />
            </div>

            <div className='mb-3'>
                <label className='form-label'>Gender</label>
                <div className='form-check'>
                    <input onChange={getUserData} className='form-check-input' type='radio' name='gender' id='male' value='male' />
                    <label className='form-check-label' htmlFor='male'>
                        Male
                    </label>
                </div>
                <div className='form-check'>
                    <input onChange={getUserData} className='form-check-input' type='radio' name='gender' id='female' value='female' />
                    <label className='form-check-label' htmlFor='female'>
                        Female
                    </label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary w-100 mt-2">Submit</button>

        </form>
    )
}

export default Create;
