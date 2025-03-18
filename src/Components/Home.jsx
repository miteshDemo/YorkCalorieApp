import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box, Container, Paper, IconButton, Avatar, CircularProgress } from "@mui/material";
import { NavLink } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { motion } from "framer-motion";

const UploadImage = () => {

  const [image, setImage] = useState("");

  const [loading, setLoading] = useState(false);

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

  return (

    <Box sx={{ minHeight: "100vh", bgcolor: "#f5f5f5", display: "flex", flexDirection: "column", alignItems: "center" }}>

      <AppBar position="static" sx={{ bgcolor: "green" }}>

        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>

          <Typography variant="h6" sx={{ fontFamily: "serif", fontWeight: "bold" }}>York.IE Calories</Typography>

          <Box>

            <Button component={NavLink} to="/" color="inherit" sx={{ fontWeight: "bold", fontFamily: "serif" }}>Home</Button>

            <Button color="inherit" sx={{ fontWeight: "bold", fontFamily: "serif" }}>Profile</Button>

            <Button component={NavLink} to="/history" color="inherit" sx={{ fontWeight: "bold", fontFamily: "serif" }}>History</Button>

          </Box>

          <IconButton>

            <Avatar sx={{ bgcolor: "gray" }} />

          </IconButton>

        </Toolbar>

      </AppBar>
      
      <Container sx={{ mt: 4, display: "flex", flexDirection: { xs: "column", md: "row" }, alignItems: "center", justifyContent: "center" }}>

        <Paper elevation={3} sx={{ p: 4, textAlign: "center", width: { xs: "100%", md: "50%" }, border: "2px dashed gray" }}>

          <Typography variant="h6" fontWeight="bold" gutterBottom>

            Upload Your Meal Snap & Uncover the Calories

          </Typography>
          
          <Box sx={{ border: "1px solid gray", borderRadius: "4px", p: 2, mb: 2 }}>

            <Typography color="gray">Drag or upload your meal pic here</Typography>

            <Button
              variant="contained"
              component="label"
              startIcon={<CloudUploadIcon />}
              sx={{ mt: 2, bgcolor: "black", color: "white" }}
            >

              Upload File

              <input type="file" hidden onChange={handleImageUpload} />

            </Button>

          </Box>
          
          <Typography variant="body2" color="gray">

            Format supported: JPEG, SVG, PNG &nbsp; <strong>Max file size:</strong> 5MB

          </Typography>

        </Paper>
        
        <Box sx={{ mt: { xs: 3, md: 0 }, ml: { md: 3 }, width: { xs: "100%", md: "50%" }, textAlign: "center" }}>

          {loading ? (
            <CircularProgress />
          ) : image ? (

            <motion.img

              src={image}
              alt="Uploaded meal"
              style={{ width: "100%", borderRadius: "8px", boxShadow: "2px 2px 10px rgba(0,0,0,0.1)" }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}

            />

          ) : (
            
            <Typography color="gray">No image uploaded</Typography>

          )}

        </Box>

      </Container>

    </Box>
  );
};

export default UploadImage;
