// import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  // Import Routes
import NavBar from './Components/NavBar/NavBar'
import MindShieldComponent from './Components/MindShieldComponent/MindShieldComponent'
import ServicesComponent from './Components/ServicesComponent/ServicesComponent'
import ThirdComponent from './Components/ThirdComponent/ThirdComponent'
import Download from './Components/Download/Download'
import Testimonial from './Components/Testimonial/Testimonial' 
import Footer from './Components/Footer/Footer'
import CreateAccountForm from './Components/CreateAccountForm/CreateAccountForm'  // Import CreateAccountForm
import Login from './Components/Login/Login'  // Import Login
import Dashboard from './Components/Dashboard/Dashboard';
import WhyMS from './Components/Dashboard/whyMS/whyMS';
import DownDash from './Components/Dashboard/DownDash/DownDash';
import Dashfooter from './Components/Dashboard/Dashfooter/Dashfooter';

function App() {
  return (
    <Router>
      <div>
        {/* The NavBar should only be rendered for Login and CreateAccount pages */}
        <Routes>
          {/* Create Account Route */}
          <Route path="/create-account" element={<><NavBar /><CreateAccountForm /></>} />

          {/* Login Route */}
          <Route path="/login" element={<><NavBar /><Login /></>} />

          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                {/* <MindShieldComponent />
                <ServicesComponent />
                <ThirdComponent />
                <Download />
                <Testimonial />
                <Footer /> */}
                <Dashboard/>
                <WhyMS/>
                <DownDash/>
                <Dashfooter/>
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
