import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import NavBar from './Components/NavBar/NavBar';
import MindShieldComponent from './Components/MindShieldComponent/MindShieldComponent';
import ServicesComponent from './Components/ServicesComponent/ServicesComponent';
import ThirdComponent from './Components/ThirdComponent/ThirdComponent';
import Download from './Components/Download/Download';
import Testimonial from './Components/Testimonial/Testimonial';
import Footer from './Components/Footer/Footer';
import CreateAccountForm from './Components/CreateAccountForm/CreateAccountForm'; 
import Login from './Components/Login/Login'; 
import Dashboard from './Components/Dashboard/Dashboard';
import WhyMS from './Components/Dashboard/whyMS/whyMS';
import DownDash from './Components/Dashboard/DownDash/DownDash';
import Dashfooter from './Components/Dashboard/Dashfooter/Dashfooter';

import React, { useState, useEffect } from "react";
// import JournalForm from "./components/JournalForm";
// import JournalList from "./components/JournalList";

// import { getJournals, createJournal, deleteJournal, updateJournal } from "./services/journalService";


function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Create Account Route */}
          <Route path="/create-account" element={<><NavBar /><CreateAccountForm /></>} />

          {/* Login Route */}
          <Route path="/login" element={<><NavBar /><Login /></>} />

          {/* Dashboard Route */}
          {/* <Route
            path="/journaling"
            element={
              <>
                <JournalForm />
                <JournalList/>
                
                
              </>
            }
          /> */}

<Route
            path="/dashboard"
            element={
              <>
                <Dashboard />
                <WhyMS />
                <DownDash />
                <Dashfooter />
              </>
            }
          />

          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <MindShieldComponent />
                <ServicesComponent />
                <ThirdComponent />
                <Download />
                <Testimonial />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
