// App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import BootcampPage from "./screens/BootcampPage";
import BootcampDetails from "./screens/BootcampDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner"; // Import the Spinner component

function BootcampPrerequisites() {
  useEffect(() => {
    window.location.replace("https://www.notion.so/csiace/CSI-Bootcamp-Prerequisites-104764b863578079a322e5e096e44fd2?pvs=4");
  }, []);

  return null; 
}

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching data)
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 4 seconds
    }, 4000);

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  return (
    <>
      <div className="scroll-smooth">
        <Navbar />
        <Router>
          <div className="App">
            {loading ? (
              <Spinner /> // Show spinner while loading
            ) : (
              <Routes>
                <Route path="/" element={<LandingPage />} /> 
                <Route path="/bootcamp" element={<BootcampPage />} />
                <Route path="/bootcamp/:bootcampName" element={<BootcampDetails />} />
                <Route path="/bootcamp/prerequisites" element={<BootcampPrerequisites />} />
              </Routes>
            )}
          </div>
        </Router>
        <Footer />
      </div>
    </>
  );
}

export default App;
