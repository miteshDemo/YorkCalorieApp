import "./App.css";
import Home from "./Components/Home";
import History from "./Components/History";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import ForgetPass from './Components/ForgetPass'
import StartPage from './Components/StartPage';
// import FoodInformation from "./Components/FoodInformation";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {

  return (

    <Router>

      {/* <StartPage /> */}

      {/* <ForgetPass /> */} 

      {/* <FoodInformation /> */}

      {/* <Login /> */}

      {/* <Registration /> */}

      <Routes>
        <Route path="/" element={<Home />} />

        {/* <Route path="/history" element={<History />} /> */}
      </Routes>

    </Router>
  );
}

export default App;
