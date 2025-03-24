import React from "react";
import { AppBar,  Toolbar, Typography, Button, Container } from "@mui/material";


const Start = () => {

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

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">

        <Container maxWidth="md" className="text-center">

          <Typography variant="h3" sx={{ fontFamily: "serif", fontWeight: "bold", color:"green" }}>
            Welcome to YORK.IE Calories 🍽️
          </Typography>

          <Typography variant="h5" sx={{ fontFamily: "serif", fontWeight: "bold" }}>
            Track your calories and maintain a healthy lifestyle with us!
          </Typography>

          <Button

            variant="contained"
            sx={{ fontFamily: "serif", fontWeight: "bold", marginTop: 3 }}
            className="bg-green-600 text-white hover:bg-green-700"
            href="/login"

          >
            Get Started
          </Button>

        </Container>

      </div>

    </>

  );

};


export default Start;
