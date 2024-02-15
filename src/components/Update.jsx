import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUser } from '../features/userDetailSlice';

const Update = () => {
  // Get the id parameter from the URL
  const { id } = useParams();
  const navigate = useNavigate(); // Navigation hook for redirecting
  const dispatch = useDispatch(); // Redux dispatch hook
  const user = useSelector((state) => state.app.user.find(u => u.id === id)); // Select user data from Redux store

  // State to hold user data for updating
  const [userData, setUserData] = useState({});

  // Set user data when the component mounts or user data changes
  useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(UpdateUser({ id, data: userData })); // Dispatch the UpdateUser action with updated user data
    navigate('/read'); // Redirect to read page after updating
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h2>Update User</h2>
          {/* Form for updating user data */}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" value={userData.name || ''} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" name="email" value={userData.email || ''} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="gender" className="form-label">Gender</label>
              {/* Dropdown for selecting gender */}
              <select className="form-select" id="gender" name="gender" value={userData.gender || ''} onChange={handleChange}>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">Age</label>
              <input type="number" className="form-control" id="age" name="age" value={userData.age || ''} onChange={handleChange} />
            </div>
            <button type="submit" className="btn btn-primary">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Update;
