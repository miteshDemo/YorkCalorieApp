import React from "react";
import { AppBar, Toolbar, Typography, Button, TextField, Box, Container, Paper } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";  

const LoginPage = () => {
  const navigate = useNavigate();  

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
    },
    validationSchema: Yup.object({
      fullName: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <AppBar position="static" sx={{ fontFamily: "serif", fontWeight: "bold", backgroundColor: "green" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ fontFamily: "serif", fontWeight: "bold" }}>
            YORK.IE Calorie
          </Typography>
        </Toolbar>
      </AppBar>

      <div 
        className="flex items-center justify-start min-h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url('https://static.vecteezy.com/system/resources/thumbnails/034/494/532/small_2x/flat-lay-vegetables-on-white-background-food-and-diet-concept-ai-generated-free-photo.jpg')" }}
      >
        <Container maxWidth="lg">
          <Box className="w-1/2">
            <Typography variant="h3" sx={{ fontFamily: "serif", fontWeight: "bold", color: "green", fontStyle: "italic" }}>
              Love Food but Worried About Calories?
            </Typography>
            <br />
            <Typography variant="h5" sx={{ fontFamily: "serif", fontWeight: "bold", color: "black" }}>
              We’re here to Help <span className="ml-2">😊</span>
            </Typography>
            <br />
            <Paper elevation={3} className="w-full p-6 rounded-lg shadow-lg bg-white">
              <form onSubmit={formik.handleSubmit}>
                <Box className="flex space-x-4 mb-4">
                  <TextField 
                    fullWidth 
                    label="Enter First & Last Name" 
                    variant="outlined" 
                    size="medium" 
                    name="fullName"
                    value={formik.values.fullName}
                    onChange={formik.handleChange}
                    error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                    helperText={formik.touched.fullName && formik.errors.fullName}
                  />
                  <TextField 
                    fullWidth 
                    label="Enter Valid Email" 
                    variant="outlined" 
                    size="medium" 
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                  />
                </Box>
                
                <Typography variant="h6" sx={{ fontFamily: "serif", fontWeight: "bold" }}>
                  Already have an account?
                  <span 
                    className="text-blue-600 cursor-pointer" 
                    onClick={() => navigate("/Registration")}
                    style={{ color: "blue", cursor: "pointer", marginLeft: "5px" }}
                  >
                    Please Register
                  </span>
                </Typography>
                
                <Typography variant="h6" sx={{ fontFamily: "serif", fontWeight: "bold", marginTop: "10px" }}>
                  <span 
                    className="text-red-600 cursor-pointer" 
                    onClick={() => navigate("/ForgotPass")}
                    style={{ color: "red", cursor: "pointer" }}
                  >
                    Forgot Password?
                  </span>
                </Typography>
                
                <br />
                <Button 
                  variant="contained" 
                  fullWidth 
                  sx={{ fontFamily: "serif", fontSize: "20px", fontWeight: "bold" }} 
                  type="submit"
                >
                  Login
                </Button>
              </form>
            </Paper>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default LoginPage;
