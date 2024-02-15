import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { readUser, deleteUser } from '../features/userDetailSlice';
import { Link } from 'react-router-dom';

const Read = () => {
  const dispatch = useDispatch();

  // Select user data from Redux store
  const { user, loading } = useSelector((state) => state.app);

  // Fetch user data when component mounts
  useEffect(() => {
    dispatch(readUser()); // Dispatching the readUser action to fetch user data
  }, [dispatch]);

  // Function to handle delete user
  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id)); // Dispatching the deleteUser action with the user id to delete the user
  };

  // Display loading message if data is being loaded
  if (loading) {
    return <h2 className='text-center mt-5'>Loading...</h2>;
  }

  // Render user data
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Map through user data and render each user card */}
        {user && user.map((item) => (
          <div className="col-md-6 mb-3" key={item.id}>
            <div className="card border-0 shadow">
              <div className="card-body">
                <h5 className="card-title text-center">User Information</h5>
                <ul className="list-group list-group-flush">
                  {/* Display user information */}
                  <li className="list-group-item mx-auto">Name: {item.name}</li>
                  <li className="list-group-item mx-auto">Email: {item.email}</li>
                  <li className="list-group-item mx-auto">Gender: {item.gender}</li>
                  <li className="list-group-item mx-auto">Age: {item.age}</li>
                  <div className='btn-group mt-3'>
                    {/* Link/button to trigger edit operation */}
                    <Link to={`/update/${item.id}`} className="btn btn-warning mx-2">Update</Link>
                    
                    {/* Button to trigger delete operation */}
                    <button className='btn btn-danger mx-5' onClick={() => handleDeleteUser(item.id)}>Delete</button>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Read;
