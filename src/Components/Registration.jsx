import React from "react";
import { AppBar, Toolbar, Typography, Button, TextField, Checkbox, FormControlLabel, Box, Divider, Link, Grid, IconButton, Paper} from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({

  name: Yup.string().required("Full Name is required"),

  email: Yup.string().email("Invalid email format").required("Email is required"),

  password: Yup.string()

    .min(8, "Password must be at least 8 characters")

    .required("Password is required"),

  confirmPassword: Yup.string()

    .oneOf([Yup.ref("password"), null], "Passwords must match")

    .required("Confirm Password is required"),

});

const RegistrationPage = () => {

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
          backgroundImage: "url('https://img.freepik.com/premium-photo/frame-vegetables-fruits-black-background_77749-73.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "blur(30px)",
        }}

      >

        <div className="flex w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden p-8">

          <div className="w-full md:w-2/3 mx-auto">

            <Box textAlign="center" mb={3}>

              <Typography variant="h5" sx={{ fontFamily: "serif", fontWeight: "bold", color: "green" }}>
                Welcome to YORK.IE Calories...! 👋
              </Typography>

              <Typography variant="h6" sx={{ fontFamily: "serif", fontWeight: "bold", color: "gray" }}>
                Create an account and start your journey.
              </Typography>

            </Box>

            <Formik

              initialValues={{ name: "", email: "", password: "", confirmPassword: "", agree: false }}
              validationSchema={validationSchema}
              onSubmit={(values) => console.log("Form values:", values)}

            >

              {({ errors, touched, handleChange, handleBlur }) => (

                <Form>

                  <Field


                    as={TextField}
                    fullWidth
                    label="Full Name"
                    name="name"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    error={touched.name && Boolean(errors.name)}
                    helperText={touched.name && errors.name}
                    onChange={handleChange}
                    onBlur={handleBlur}

                  />

                  <Field
                    as={TextField}
                    fullWidth
                    label="Email Address"
                    name="email"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Field

                    as={TextField}
                    fullWidth
                    label="Password"
                    name="password"
                    type="password"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                    onChange={handleChange}
                    onBlur={handleBlur}

                  />

                  <Field

                    as={TextField}
                    fullWidth
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    variant="outlined"
                    size="small"
                    margin="normal"
                    error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                    helperText={touched.confirmPassword && errors.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}

                  />

                  <Box display="flex" alignItems="center" mt={1} mb={2}>

                    <Field as={FormControlLabel} control={<Checkbox />} name="agree" label="I agree to the Terms and Conditions" />

                  </Box>

                  <Button type="submit" fullWidth variant="contained" className="bg-green-600 text-white font-serif font-bold hover:bg-green-600">
                    Sign Up
                  </Button>

                </Form>

              )}

            </Formik>

            <Box className="flex items-center my-3">

              <Divider className="flex-grow" />

              <Typography className="mx-2 text-gray-600 text-sm">or</Typography>

              <Divider className="flex-grow" />

            </Box>

            <Grid container justifyContent="center" spacing={2}>

              {[
                { src: "https://cdn-icons-png.flaticon.com/512/145/145802.png", alt: "Facebook" },
                { src: "https://cdn-icons-png.flaticon.com/512/145/145812.png", alt: "Twitter" },
                { src: "https://cdn-icons-png.flaticon.com/512/733/733553.png", alt: "GitHub" },
                { src: "https://cdn-icons-png.flaticon.com/512/281/281764.png", alt: "Google" },

              ].map((icon, index) => (

                <Grid item key={index}>

                  <IconButton href="/">

                    <img src={icon.src} width={24} alt={icon.alt} />

                  </IconButton>

                </Grid>

              ))}

            </Grid>

          </div>

        </div>

      </div>

    </>

  );

};

export default RegistrationPage;
