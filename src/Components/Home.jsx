import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Container, Paper, IconButton, Avatar, CircularProgress, Switch, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { color, motion } from "framer-motion";

const UploadImage = () => {

  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleImageUpload = (event) => {

    const file = event.target.files[0];

    if (file) {

      setLoading(true);

      const reader = new FileReader();

      reader.onloadend = () => {

        setImage(reader.result);

        setLoading(false);

      };

      reader.readAsDataURL(file);

    }

  };

  const handleReupload = () => {

    setImage("");

  };

  const toggleDarkMode = () => {

    setDarkMode((prevMode) => !prevMode);

  };

  const toggleDrawer = () => {

    setDrawerOpen(!drawerOpen);

  };

  return (

    <Box

      sx={{
        minHeight: "100vh",
        bgcolor: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "#fff" : "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}

    >

      <AppBar position="static" sx={{ bgcolor: darkMode ? "#333" : "green" }}>
        
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          <Typography variant="h6" sx={{ fontFamily: "serif", fontWeight: "bold" }}>

            YORK.IE Calories

          </Typography>

          <Box>

            <Button component={NavLink} to="/" color="inherit" sx={{ fontWeight: "bold", fontFamily: "serif" }}>
              Home
            </Button>

            <Button color="inherit" sx={{ fontWeight: "bold", fontFamily: "serif" }}>
              Profile
            </Button>

            <Button component={NavLink} to="/history" color="inherit" sx={{ fontWeight: "bold", fontFamily: "serif" }}>
              History
            </Button>

          </Box>

          <IconButton onClick={toggleDrawer}>

            <Avatar sx={{ bgcolor: "gray" }} />

          </IconButton>

          <Switch checked={darkMode} onChange={toggleDarkMode} color="default" sx={{ ml: 2 }} />

        </Toolbar>

      </AppBar>

     
      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>

        <Box sx={{ width: 250}} role="presentation">

          <List>
            <ListItem button component={NavLink} to="/" onClick={toggleDrawer}>
              <ListItemText primary="Settings" />
            </ListItem>

            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Logout" />
            </ListItem>

            <ListItem button onClick={toggleDrawer}>
              <ListItemText primary="Set Goals" />
            </ListItem>

          </List>

        </Box>

      </Drawer>

      <Container

        sx={{
          mt: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
        }}

      >
        <Paper

          elevation={3}
          sx={{
            p: 4,
            textAlign: "center",
            width: { xs: "100%", md: "50%" },
            border: "2px dashed gray",
            bgcolor: darkMode ? "#333" : "white",
            color: darkMode ? "#fff" : "#000",
          }}

        >

          <Typography variant="h6" fontWeight="bold" gutterBottom>

            Upload Your Meal Snap & Uncover the Calories

          </Typography>

          <Box sx={{ border: "1px solid gray", borderRadius: "4px", p: 2, mb: 2 }}>

            <Typography color="gray">Drag or upload your meal pic here</Typography>

            <Button variant="contained" component="label" startIcon={<CloudUploadIcon />} sx={{ mt: 2, bgcolor: darkMode ? "white" : "black", color: darkMode ? "black" : "white" }}>

              Upload File

              <input type="file" hidden onChange={handleImageUpload} />

            </Button>

          </Box>

          <Typography variant="body2" color="gray">
            Format supported: JPEG, SVG, PNG &nbsp; <strong>Max file size:</strong> 5MB
          </Typography>

        </Paper>

        <Box

          sx={{
            mt: { xs: 3, md: 0 },
            ml: { md: 3 },
            width: { xs: "100%", md: "50%" },
            textAlign: "center",
          }}

        >

          {loading ? (

            <CircularProgress />

          ) : image ? (

            <>

              <motion.img
                src={image}
                alt="Uploaded meal"
                style={{
                  width: "100%",
                  borderRadius: "8px",
                  boxShadow: "2px 2px 10px rgba(0,0,0,0.1)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />

              <Button variant="contained" sx={{ mt: 2, bgcolor : darkMode ? "white" : "green", color: darkMode ? "black" : "white", fontFamily: "serif", fontWeight: "bold"  }} onClick={handleReupload}>
                Re-upload
              </Button>

            </>

          ) : (

            <Typography color="gray">No image uploaded</Typography>

          )}

        </Box>

      </Container>

    </Box>

  );

};

export default UploadImage;