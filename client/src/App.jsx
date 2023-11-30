import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import './App.css';
import RightImage from './assets/3129492.jpg';

import DropFileInput from './components/drop-file-input/DropFileInput';
import Navbar from './components/Navbar/NavBar';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import {Fragment} from 'react';
import Login from './components/Login/Login';
import Dashboard from './Dashboard/Dashboard';

function App () {
  const onFileChange = files => {
    console.log (files);
  };

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/home"
          element={
            <Fragment>
              <Navbar />
              <div className="main-conatiner">
                <div className="body-container">
                  <div className="box">
                    <DropFileInput
                      onFileChange={files => onFileChange (files)}
                    />
                  </div>
                  <img
                    src={RightImage}
                    alt="right"
                    style={{width: 500}}
                    className="image-right"
                  />
                </div>
                <About />
                <Footer />
              </div>
            </Fragment>
          }
        />
        <Route exact path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/login" />} />;

      </Routes>
    </Router>
  );
}

export default App;
