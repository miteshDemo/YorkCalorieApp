import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, TextField, Box, Container, Paper, Link } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const OTPPage = () => {
  const navigate = useNavigate();
  const [otpSent, setOtpSent] = useState(true);
  const [generatedOtp, setGeneratedOtp] = useState("");

  useEffect(() => {
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    setGeneratedOtp(otp);
    console.log("Generated OTP:", otp); 
  }, []);

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    otp: Yup.string()
      .matches(/\d{4}/, "OTP must be 4 digits")
      .required("OTP is required"),
  });

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: "green" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ fontWeight: "bold", fontFamily: "serif" }}>
            YORK.IE Calories
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <Box mt={8} display="flex" flexDirection="column" alignItems="center">
          <Paper elevation={3} sx={{ p: 4, textAlign: "center", width: "100%" }}>
            <Typography variant="h5" fontWeight="bold" color="green">
              OTP Verification
            </Typography>
            <Typography variant="body1" color="textSecondary" mt={1}>
              Enter the OTP sent to your email to verify your identity.
            </Typography>

            <Formik
              initialValues={{ fullName: "", email: "", otp: "" }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                if (values.otp === generatedOtp) {
                  alert("OTP Verified Successfully!");
                  navigate("/Home");
                } else {
                  alert("Invalid OTP. Please try again.");
                }
              }}
            >
              {({ errors, touched, handleChange, handleBlur }) => (
                <Form>
                  <Field
                    as={TextField}
                    fullWidth
                    label="Full Name"
                    name="fullName"
                    variant="outlined"
                    margin="normal"
                    error={touched.fullName && Boolean(errors.fullName)}
                    helperText={touched.fullName && errors.fullName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Field
                    as={TextField}
                    fullWidth
                    label="Email"
                    name="email"
                    variant="outlined"
                    margin="normal"
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Field
                    as={TextField}
                    fullWidth
                    label="Enter OTP"
                    name="otp"
                    variant="outlined"
                    margin="normal"
                    error={touched.otp && Boolean(errors.otp)}
                    helperText={touched.otp && errors.otp}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 2, backgroundColor: "green", color: "white" }}
                  >
                    Verify OTP
                  </Button>
                </Form>
              )}
            </Formik>

            {otpSent && (
              <Box mt={2}>
                <Link
                  component="button"
                  variant="body2"
                  sx={{ color: "blue", cursor: "pointer" }}
                  onClick={() => {
                    const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
                    setGeneratedOtp(newOtp);
                    console.log("New OTP Sent:", newOtp);
                    alert("OTP Resent Successfully!");
                  }}
                >
                  Resend OTP
                </Link>
              </Box>
            )}
          </Paper>
        </Box>
      </Container>
    </>
  );
};

export default OTPPage;
