import React from "react";
import { AppBar, Toolbar, Typography, Button, TextField, Checkbox, FormControlLabel, Box, Divider, Link, Grid, IconButton } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({

  email: Yup.string().email("Invalid email format").required("Email is required"),

  password: Yup.string()

    .min(8, "Password must be at least 8 characters")

    .required("Password is required"),

});

const Login = () => {

  return (

    <div>

      <AppBar
        position="static"
        sx={{ fontFamily: "serif", fontWeight: "bold", backgroundColor: "green" }}
      >

        <Toolbar className="flex justify-between">

          <Typography variant="h6" sx={{ fontFamily: "serif", fontWeight: "bold" }}>
            YORK.IE Calorie
          </Typography>

        </Toolbar>

      </AppBar>

      <div

        className="mt-10 flex min-h-screen items-center justify-center p-4"
        style={{
          backgroundImage: "url('https://t4.ftcdn.net/jpg/03/20/39/89/360_F_320398931_CO8r6ymeSFqeoY1cE6P8dbSGRYiAYj4a.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
        }}

      >
        <div className="flex w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden">

          <div className="w-full p-8 m-4">

            <Box textAlign="center" mb={3}>

              <Typography variant="h4" sx={{ fontFamily: "serif", fontWeight: "bold", color: "green" }}>
                YORK.IE Calories
              </Typography>

              <Typography variant="h5" className="font-serif font-bold mt-2">
                Welcome to York.IE Calories 👋
              </Typography>

              <Typography variant="h6" className="text-gray-600 font-serif font-bold">
                Please sign in to your account and start exploring our services.
              </Typography>

            </Box>

            <Formik

              initialValues={{ email: "", password: "", remember: false }}
              validationSchema={validationSchema}
              onSubmit={(values) => console.log("Form values:", values)}

            >

              {({ errors, touched, handleChange, handleBlur }) => (

                <Form>

                  <Field
                    as={TextField}
                    fullWidth
                    label="Email or Username"
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


                  <Box display="flex" justifyContent="space-between" alignItems="center" mt={1} mb={2}>

                    <Field as={FormControlLabel} control={<Checkbox />} name="remember" label="Remember me" />

                    <Link href="#" underline="hover" className="font-serif font-bold text-green-600">
                      Forgot password?
                    </Link>

                  </Box>

                  <Button type="submit" fullWidth variant="contained" sx={{ fontFamily: "serif", fontWeight:"bold" }} className="bg-green-600 text-white  hover:bg-green-700">
                    Login
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

                  <IconButton href="#">

                    <img src={icon.src} width={24} alt={icon.alt} />

                  </IconButton>

                </Grid>

              ))}

            </Grid>

          </div>

        </div>

      </div>

    </div>

  );
  
};

export default Login;
