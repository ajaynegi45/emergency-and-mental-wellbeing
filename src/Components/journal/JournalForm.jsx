import React, { useState, useEffect } from "react";

const JournalForm = ({ onAddJournal, onEditJournal, editJournal }) => {
  const [content, setContent] = useState(editJournal ? editJournal.content : "");
  const [isFocused, setIsFocused] = useState(false);
  const [error, setError] = useState(""); // New state for handling error messages

  useEffect(() => {
    if (editJournal) {
      setContent(editJournal.content);
    }
  }, [editJournal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) {
      setError("Content cannot be empty !"); // Set error message when content is empty
      return;
    }
    setError(""); // Clear any previous error messages
    if (editJournal) {
      onEditJournal(editJournal.id, content); // Pass the journal ID and content to edit
    } else {
      onAddJournal(content); // Add new journal
    }
    setContent(""); // Clear the form after submission
  };

  const navButtonStyle = {
    background: "white",
    color: "black",
    border: "3.5px solid #FB8ED3",
    borderRadius: "20px",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: "bold",
    textTransform: "uppercase",
  };

  return (
    <form onSubmit={handleSubmit}>
      <div style={{backgroundColor:"white"}}>
        {/* Reusing NavBar-like styling */}
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingLeft: "10px",
            backgroundColor: "white",
            marginBottom: "20px", // Adding margin at the bottom
          }}
        >
          {/* Logo and Site Name */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="m.png"
              alt="Logo"
              style={{
                width: "40px", // Adjust based on your logo size
                height: "auto",
                paddingLeft: "30px",
                paddingRight: "20px",
                marginRight: "10px",
              }}
            />
            <span
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "#333",
                margin: 0,
                padding: 0,
                lineHeight: "0", // Adjust line height to remove extra space
                verticalAlign: "middle", // Ensure text aligns vertically with the logo
              }}
            >
              MIND SHIELD
            </span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "35px", marginLeft:"500px" }}>
              <a href="#home" style={{ textDecoration: "none", color: "grey", fontSize: "18px" }}>
                Home
              </a>
              <a href="#emergency" style={{ textDecoration: "none", color: "grey", fontSize: "18px"}}>
                Emergency Contacts
              </a>
              <a href="#profile" style={{ textDecoration: "none", color: "grey", fontSize: "18px"}}>
                Profile
              </a>
            </div>
          {/* Right Side: reg_img and Navigation Links */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <img
              src="reg_pic.png"
              alt="Right Image"
              style={{
                width: "300px", // Adjust the image size as needed
                height: "auto",
              }}
            />
          </div>
        </nav>

        {/* Journal Section */}
        <div
          style={{
            marginTop: "10px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
            marginBottom: "30px",
            backgroundColor: "white",
  
          }}
        >
          <h1 style={{ margin: 0 }}>JOURNALLING</h1>
        </div>
        
        {/* Journal Content */}
        <div>
          <label style={{ textAlign: "center", border: "none",backgroundColor: "white" }}>
            <strong style={{ fontSize: "24px" }}>Content</strong>
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            rows="9"
            style={{
              width: "100%",
              marginTop: "20px",
              marginBottom: "10px",
              border: "1px solid black", // Keep the border style consistent
              borderRadius: "10px",
              outline: "none", // Prevent default outline on focus
            }}
          />
          
          {/* Display error message below the textarea */}
          {error && (
            <div style={{ color: "red", fontSize: "14px", marginTop: "5px" }}>
              {error}
            </div>
          )}
        </div>

        <button
          type="submit"
          style={{
            marginTop: "10px",
            marginLeft: "46%",
            background: "rgba(69, 143, 246, 1)",
            color: "white",
            padding: "13px",
            paddingBottom: "10px",
            marginBottom: "20px",
            border: "none", // Same border for the button
            cursor: "pointer",
            fontSize: "17px",
            borderRadius: "15px",
            outline: "none", // Remove outline for button focus
          }}
        >
          {editJournal ? "Update Journal" : "Add Journal"}
        </button>
      </div>
    </form>
  );
};

export default JournalForm;
