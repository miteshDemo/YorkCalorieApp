import "./App.css";
import Home from "./Components/Home";
import History from "./Components/History";
import Login from "./Components/Login";
import ForgetPass from './Components/ForgetPass'
import StartPage from './Components/StartPage';
import FoodInformation from "./Components/FoodInformation";
import OTP from "./Components/OTP";
import Registration from "./Components/Registration";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (

    <Router>


      {/* <ForgetPass />  */}

      {/* <FoodInformation /> */}

      {/* <Login /> */}

      {/* <OTP /> */}

      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/Login" element={<Login />}/>
        <Route path="/Register" element={<Registration />} />
        <Route path="/Home" element={<Home />}/>
        {/* <Route path="/history" element={<History />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
