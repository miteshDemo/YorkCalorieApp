import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Container, Paper, Avatar, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import moment from "moment";

const History = () => {

  const [history, setHistory] = useState([]);

  useEffect(() => {

    const storedHistory = JSON.parse(localStorage.getItem("imageHistory")) || [];

    setHistory(storedHistory);

  }, []);

  return (

    <Box className="min-h-screen bg-gray-100 flex flex-col items-center">

      <AppBar position="static" sx={{ bgcolor: "green" }}>

        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          <Typography variant="h6" sx={{ fontFamily: "serif", fontWeight: "bold" }}>History</Typography>

          <Box>

            <Button component={NavLink} to="/" color="inherit" sx={{ fontWeight: "bold", fontFamily: "serif" }}>Home</Button>

          </Box>

          <IconButton>

            <Avatar sx={{ bgcolor: "gray" }} />

          </IconButton>

        </Toolbar>

      </AppBar>
      
      <Container className="mt-6 w-full max-w-4xl">

        <Typography variant="h5" className="text-center font-bold mb-4">Uploaded Images History</Typography>

        {history.length > 0 ? (

          history.map((item, index) => (

            <Paper key={index} elevation={3} className="p-4 mb-4 flex items-center gap-4 shadow-lg">

              <img src={item.image} alt="Uploaded" className="w-24 h-24 rounded-lg shadow-md" />

              <Typography variant="body1" className="text-gray-600">

                Uploaded on: {moment(item.timestamp).format("MMMM Do YYYY, h:mm:ss a")}

              </Typography>

            </Paper>

          ))

        ) : (

          <Typography className="text-center text-gray-500">No uploaded images found</Typography>

        )}

      </Container>

    </Box>

  );

};

export default History;
