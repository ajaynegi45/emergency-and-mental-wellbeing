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
import JournalForm from "./components/journal/JournalForm";
import JournalList from "./components/journal/JournalList";
import { getJournals, createJournal, deleteJournal, updateJournal } from "./services/journalService";

function App() {
  const [journals, setJournals] = useState([]);
  const [editJournal, setEditJournal] = useState(null);

  useEffect(() => {
    fetchJournals();
  }, []);

  const fetchJournals = async () => {
    try {
      const data = await getJournals();
      setJournals(data);
    } catch (error) {
      console.error("Error fetching journals:", error);
    }
  };

  const handleAddJournal = async (content) => {
    try {
      const newJournal = await createJournal(content);
      setJournals([...journals, newJournal]);
    } catch (error) {
      console.error("Error adding journal:", error);
    }
  };

  const handleDeleteJournal = async (id) => {
    try {
      await deleteJournal(id);
      setJournals(journals.filter((journal) => journal.id !== id));
    } catch (error) {
      console.error("Error deleting journal:", error);
    }
  };

  const handleEditJournal = async (id, content) => {
    try {
      const updatedJournal = await updateJournal(id, content);
      setJournals(
        journals.map((journal) =>
          journal.id === id ? { ...journal, content: updatedJournal.content } : journal
        )
      );
      setEditJournal(null); // Reset the form to add a new journal after editing
    } catch (error) {
      console.error("Error updating journal:", error);
    }
  };

  const handleEditClick = (journal) => {
    setEditJournal(journal);
  };

  return (
    <Router>
      <div>
        <Routes>
          {/* Create Account Route */}
          <Route path="/create-account" element={<><NavBar /><CreateAccountForm /></>} />

          {/* Login Route */}
          <Route path="/login" element={<><NavBar /><Login /></>} />

          {/* Dashboard Route */}
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

          {/* Journaling Route */}
          <Route
            path="/journaling"
            element={
              <div style={{ padding: "5px" }}>
                <JournalForm
                  onAddJournal={handleAddJournal}
                  onEditJournal={handleEditJournal}
                  editJournal={editJournal}
                />
                <JournalList
                  journals={journals}
                  onDeleteJournal={handleDeleteJournal}
                  onEditJournal={handleEditClick}
                />
              </div>
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
