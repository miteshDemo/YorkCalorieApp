import React, { useState } from "react";
import axios from "axios";
import { CircularProgress } from "@mui/material";
import { Typography } from "@mui/material";
import { useDropzone } from "react-dropzone";


function App() {

  const [image, setImage] = useState(null);

  const [loading, setLoading] = useState(false);

  const [foodInfo, setFoodInfo] = useState(null);

  const onDrop = (acceptedFiles) => {

    setImage(URL.createObjectURL(acceptedFiles[0]));

    processImage(acceptedFiles[0]);

  };

  const { getRootProps, getInputProps } = useDropzone({

    onDrop,

    accept: "image/*",

  });

  
  const processImage = async (file) => {

    setLoading(true);

    const apiUrl = "API_URL"; 

    const apiKey = "API_KEY";  

    const formData = new FormData();

    formData.append("file", file);

    try {
      
      const response = await axios.post(apiUrl, formData, {

        headers: {

          "Content-Type": "multipart/form-data",

          "Authorization": `Bearer ${apiKey}`,

        },

      });

      const foodData = response.data;

      setFoodInfo({

        name: foodData.foodName,

        calories: foodData.calories,

      });

    } catch (error) {

      console.error("Error processing image:", error);

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="flex justify-center items-center h-screen bg-gray-100">

      <div className="p-8 bg-white rounded shadow-lg max-w-lg w-full">

        <Typography variant="h4" className="text-center mb-4">

          Food Calorie Estimator

        </Typography>

        <div {...getRootProps()} className="border-dashed border-2 border-gray-400 p-4 mb-4 cursor-pointer">

          <input {...getInputProps()} />

          <Typography variant="body1" className="text-center text-gray-600">

            Drag & drop an image or click to select

          </Typography>

        </div>

        {image && (

          <div className="mb-4">

            <img src={image} alt="Uploaded Food" className="w-full h-auto rounded-md shadow-md" />

          </div>

        )}

        {loading ? (

          <div className="flex justify-center">

            <CircularProgress />

          </div>

        ) : foodInfo ? (

          <div className="text-center">

            <Typography variant="h6">{foodInfo.name}</Typography>

            <Typography variant="body1" className="mt-2">

              Estimated Calories: {foodInfo.calories} kcal

            </Typography>

          </div>

        ) : (

          <Typography variant="body1" className="text-center mt-4 text-gray-600">

            Please upload an image of food to estimate the calories.

          </Typography>

        )}

      </div>

    </div>

  );

}

export default App;