import "./App.css";
import Home from "./Components/Home";
import History from "./Components/History";
// import FoodInformation from "./Components/FoodInformation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <Router>
      {/* <FoodInformation /> */}
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
