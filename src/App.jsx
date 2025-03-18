import './App.css'
import Home from './Components/Home'
import History from './Components/History';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  
  return (
    <div>
      <Router>
      <Home />
      <Routes>
      <Route path="/history" element={<History />} />
      </Routes>
    </Router>
    </div>
  )
}

export default App
