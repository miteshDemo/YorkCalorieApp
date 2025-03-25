import React, { useState, useCallback } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Container, Paper, IconButton, Avatar, CircularProgress, Switch, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { NavLink } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";

const UploadImage = () => {

  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);

  const [darkMode, setDarkMode] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {

    const file = acceptedFiles[0];

    if (file) {

      setLoading(true);

      const reader = new FileReader();

      reader.onloadend = () => {

        setImage(reader.result);

        setLoading(false);

      };

      reader.readAsDataURL(file);

    }

  }, []);

  const { getRootProps, getInputProps } = useDropzone({

    onDrop,

    accept: "image/jpeg, image/png, image/svg+xml",

    maxSize: 5 * 1024 * 1024,

  });

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
        backgroundImage: `url(${darkMode ? "https://insider.fitt.co/wp-content/uploads/2024/12/PressRelease_2400x1400-2.jpg" : "https://insider.fitt.co/wp-content/uploads/2024/12/PressRelease_2400x1400-2.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        bgcolor: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "#fff" : "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}

    >
      <AppBar position="static" sx={{ bgcolor: darkMode ? "#333" : "green" }}>

        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          <Typography variant="h6" sx={{ fontFamily: "serif", fontWeight: "bold" }}>YORK.IE Calories</Typography>

          <Box>
            <Button component={NavLink} to="/" color="inherit" sx={{ fontWeight: "bold", fontFamily: "serif" }}>Home</Button>
            <Button color="inherit" sx={{ fontWeight: "bold", fontFamily: "serif" }}>Profile</Button>
            <Button component={NavLink} to="/history" color="inherit" sx={{ fontWeight: "bold", fontFamily: "serif" }}>History</Button>
          </Box>

          <IconButton onClick={toggleDrawer}><Avatar sx={{ bgcolor: "gray" }} /></IconButton>

          <Switch checked={darkMode} onChange={toggleDarkMode} color="default" sx={{ ml: 2 }} />

        </Toolbar>

      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer}>

        <Box sx={{ width: 250 }} role="presentation">

          <List >
            <ListItem button component={NavLink} to="/" onClick={toggleDrawer}><ListItemText primary="Settings" /></ListItem>
            <ListItem button onClick={toggleDrawer}><ListItemText primary="Logout" /></ListItem>
            <ListItem button onClick={toggleDrawer}><ListItemText primary="Set Goals" /></ListItem>
          </List>

        </Box>

      </Drawer>

      <Container sx={{ mt: 10, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "center" }}>

        <Paper elevation={3} sx={{ p: 4, textAlign: "center", width: { xs: "100%", md: "50%" }, border: "2px dashed gray", bgcolor: darkMode ? "#333" : "white", color: darkMode ? "#fff" : "#000" }}>

          <Typography variant="h5" fontWeight="bold" fontStyle="italic" fontFamily="serif" gutterBottom>Upload Your Meal Snap & Uncover the Calories</Typography>

          <Box {...getRootProps()} sx={{ border: "1px solid gray", borderRadius: "4px", p: 2, mb: 2, cursor: "pointer" }}>

            <input {...getInputProps()} />

            <Typography color="gray" sx={{ fontFamily : "serif", fontWeight : "bold"}}>Drag & Drop or Click to Upload</Typography>

            <Button variant="contained" startIcon={<CloudUploadIcon />} sx={{ mt: 2, bgcolor: darkMode ? "white" : "black", color: darkMode ? "black" : "white" }}>Upload File</Button>

          </Box>

          <Typography variant="body2" color="gray" sx={{ fontFamily : "serif", fontWeight : "bold"}} >Format supported: JPEG, SVG, PNG &nbsp; <strong>Max file size:</strong> 5MB</Typography>

        </Paper>

        <Box sx={{ mt: { xs: 3, md: 0 }, ml: { md: 3 }, width: { xs: "100%", md: "50%" }, textAlign: "center" }}>

          {loading ? (

            <CircularProgress />

          ) : image ? (

            <>

              <motion.img src={image} alt="Uploaded meal" style={{ width: "100%", borderRadius: "8px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} />

              <Button variant="contained" sx={{ mt: 2, bgcolor: darkMode ? "white" : "green", color: darkMode ? "black" : "white", fontFamily: "serif", fontWeight: "bold" }} onClick={handleReupload}>Re-upload</Button>

            </>

          ) : (

            <Typography color="white" sx={{ fontFamily : "serif", fontWeight : "bold"}}>No image uploaded</Typography>

          )}

        </Box>

      </Container>

    </Box>

  );

};

export default UploadImage;
