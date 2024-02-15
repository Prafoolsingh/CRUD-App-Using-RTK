import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='landing-page text-center'>
      <h1 className='mt-5'>Welcome to Our CRUD Redux App!</h1>
      <h5 className='mt-5'>Created CRUD app using Redux toolkit and createAsync</h5>
      <p className='mt-3'>This app allows you to manage users using CRUD operations:</p>
      <ul className="list-unstyled text-left mt-3">
        <li className="font-weight-bold fs-5 mb-2">Create new user</li>
        <li className="font-weight-bold fs-5 mb-2">Read existing user</li>
        <li className="font-weight-bold fs-5 mb-2">Update user</li>
        <li className="font-weight-bold fs-5 mb-2">Delete user</li>
      </ul>
      <p className='mt-3'>Get started by creating a new User:</p>
      <Link to="/create" className="btn btn-primary mt-3">Add User details</Link>
    </div>
  );
}

export default Home;
