import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import History from "./Components/History";
import Login from "./Components/Login";
import ForgetPass from "./Components/ForgetPass";
import StartPage from "./Components/StartPage";
import FoodInformation from "./Components/FoodInformation";
import Registration from "./Components/Registration";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/home" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/forgetpass" element={<ForgetPass />} />
        <Route path="/foodinfo" element={<FoodInformation />} />
      </Routes>
    </Router>
  );
}

export default App;
