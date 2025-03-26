import React, { useState, useCallback } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Paper,
  IconButton,
  Avatar,
  CircularProgress,
  Switch,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";

const UploadImage = () => {
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [calorieData, setCalorieData] = useState(null);

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);
      const response = await fetch("https://yorkcaloriapp.onrender.com", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setImage(URL.createObjectURL(file));
      setCalorieData(data);
    } catch (err) {
      console.error("Error uploading image:", err);
    } finally {
      setLoading(false);
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      uploadImage(file);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png, image/svg+xml",
    maxSize: 5 * 1024 * 1024,
  });

  const handleReupload = () => {
    setImage("");
    setCalorieData(null);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: darkMode ? "#121212" : "#f5f5f5", color: darkMode ? "#fff" : "#000" }}>
      <AppBar position="static" sx={{ bgcolor: darkMode ? "#333" : "green" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>YORK.IE Calories</Typography>
          <Box>
            <Button component={NavLink} to="/Home" color="inherit">Home</Button>
            <Button component={NavLink} to="/history" color="inherit">History</Button>
          </Box>
          <IconButton onClick={() => setDrawerOpen(true)}><Avatar sx={{ bgcolor: "gray" }} /></IconButton>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Toolbar>
      </AppBar>

      <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
          <ListItem button onClick={() => setDrawerOpen(false)}><ListItemText primary="Settings" /></ListItem>
          <ListItem button onClick={() => setDrawerOpen(false)}><ListItemText primary="Logout" /></ListItem>
        </List>
      </Drawer>

      <Container sx={{ mt: 5, textAlign: "center" }}>
        <Paper elevation={3} sx={{ p: 4, border: "2px dashed gray", bgcolor: darkMode ? "#333" : "white" }}>
          <Typography variant="h5" fontWeight="bold">Upload Your Meal</Typography>
          <Box {...getRootProps()} sx={{ border: "1px solid gray", p: 2, cursor: "pointer" }}>
            <input {...getInputProps()} />
            <Typography color="gray">Drag & Drop or Click to Upload</Typography>
            <Button variant="contained" startIcon={<CloudUploadIcon />}>Upload File</Button>
          </Box>
        </Paper>

        <Box sx={{ mt: 5 }}>
          {loading ? (
            <CircularProgress />
          ) : image && (
            <>
              <motion.img src={image} alt="Uploaded meal" style={{ width: "100%", borderRadius: "8px" }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} />
              <Button variant="contained" sx={{ mt: 2 }} onClick={handleReupload}>Re-upload</Button>
              {calorieData && (
                <Box sx={{ mt: 4 }}>
                  <Typography variant="h5" fontWeight="bold">Detected Food & Calories:</Typography>
                  <ul>
                    {Object.entries(calorieData).map(([food, cal]) => (
                      <li key={food}>
                        <Typography variant="body1">
                          <strong>{food}:</strong> {typeof cal === "object" ? JSON.stringify(cal, null, 2) : cal}
                        </Typography>
                      </li>
                    ))}
                  </ul>
                </Box>
              )}
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default UploadImage;