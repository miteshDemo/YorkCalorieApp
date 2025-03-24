import React from "react";
import { AppBar, Toolbar, Typography, Button, TextField, Box, Link } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Email is required"),
});

const ForgetPassword = () => {

  return (

    <>

      <AppBar
        position="static"
        sx={{ fontFamily: "serif", fontWeight: "bold", backgroundColor: "green" }}
      >

        <Toolbar className="flex justify-between">

          <Typography variant="h6" sx={{ fontFamily: "serif", fontWeight: "bold" }}>
            YORK.IE Calories
          </Typography>

        </Toolbar>

      </AppBar>

      <div

        className="mt-10 flex min-h-screen items-center justify-center p-4"
        style={{
          backgroundImage:"url('https://img.freepik.com/free-photo/colorful-veggies-frame-with-copy-space_23-2148290738.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}

      >
        <div className="flex w-full max-w-md bg-white shadow-lg rounded-lg overflow-hidden">

          <div className="w-full p-8 m-3">

            <Box textAlign="center" mb={3}>

              <Typography variant="h4" sx={{ fontFamily: "serif", fontWeight: "bold", color: "green" }}>
                Forgot Password
              </Typography>

              <Typography variant="h6" className="text-gray-600 font-serif font-bold">
                Enter your email and we’ll send you instructions to reset your password.
              </Typography>

            </Box>

            <Formik

              initialValues={{ email: "" }}
              validationSchema={validationSchema}
              onSubmit={(values) => console.log("Reset link sent to:", values.email)}

            >

              {({ errors, touched, handleChange, handleBlur }) => (
                <Form>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Email"
                    name="email"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    onChange={handleChange}
                    onBlur={handleBlur}

                  />

                  <Button type="submit" fullWidth variant="contained" sx={{ fontFamily: "serif", fontWeight: "bold" }} className="bg-green-600 text-white hover:bg-green-700">
                    Send Reset Link
                  </Button>

                </Form>

              )}

            </Formik>

            <Box textAlign="center" mt={2}>

              <Link href="/login" underline="hover" className="font-serif font-bold text-green-600">
                ← Back to login
              </Link>

            </Box>

          </div>

        </div>

      </div>

    </>

  );
  
};

export default ForgetPassword;
