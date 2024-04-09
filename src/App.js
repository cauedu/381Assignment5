import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './components/Homepage';
import Productpage from './components/Productpage';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/register" element={<SignUpPage />} />
          {/* Use PrivateRoute for the ProductPage */}
          <Route path="/products" element={<Productpage />} />
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
