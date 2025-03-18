import React from "react";
import { NavLink } from 'react-router-dom'

const uploadImage = () => {

  return (

    <div className="min-h-screen bg-gray-100 flex flex-col items-center" >
      
      <nav className="w-full bg-green-600 text-white p-4 flex justify-between items-center">

        <h1 className="text-xl font-bold font-serif text-white">York.IE Calories</h1>

        <div className="flex space-x-4">

          <NavLink to="/" className="hover:underline text-1xl font-serif font-bold">Home</NavLink>

          <a href="#" className="hover:underline text-1xl font-serif font-bold">Profile</a>

          <NavLink to="/history" className="hover:underline text-1xl font-serif font-bold">History</NavLink>

        </div>

        <div className="w-10 h-10 rounded-full bg-gray-300">

        </div>

      </nav>

      <div className="flex flex-col md:flex-row items-center justify-center mt-10 w-11/12 md:w-3/4 lg:w-2/3">
       
        <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 text-center border-dashed border-2 border-gray-300">

          <p className="text-lg font-semibold mb-2">Upload Your Meal Snap & Uncover the Calories</p>

          <div className="border border-gray-400 rounded-md p-4 mb-4">

            <p className="text-gray-500">Drag or upload your meal pic here</p>

            <button className="mt-2 bg-black text-white px-4 py-2 rounded">Upload File</button>

          </div>

          <p className="text-sm text-gray-500">Format supported: JPEG, SVG, PNG &nbsp; <b>Max file size:</b> 5MB</p>

        </div>

       
        <div className="mt-6 md:mt-0 md:ml-6 w-full md:w-1/2">

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT59FCMlRaC7oij_49QzuDW_gnRRMsYo2vj6g&s"
            alt="Uploaded meal"
            className="rounded-lg shadow-md w-full"
          />

        </div>

      </div>

    </div>

  );
};

export default uploadImage;
