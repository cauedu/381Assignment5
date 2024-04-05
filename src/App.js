import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import BrowserRouter as Router and Routes
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import LoginPage from './components/LoginPage';
import SignupForm from './components/SignupForm';



const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Productpage />} />    
        </Routes>
      </div>
    </Router>
  );
};

export default App;
