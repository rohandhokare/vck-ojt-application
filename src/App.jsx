import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ContactPage from "./pages/ContactPage";
import "./styles/Pages.css"
import AboutPage from "./pages/AboutPages";
import CoursesPage from "./pages/CoursesPage";
import AdmissionsPage from "./pages/AdmissionPage";
import NotFoundPage from "./pages/NotFoundPage";
import ChatbotComponent from "./components/Chatbot/ChatbotComponents";
import "./App.css"
import { useState } from "react";
import DeveloperInfoPopup from "./components/DeveloperInfo/DeveloperInfoPopup";

const App = () => {
        const [showPopup, setShowPopup] = useState(true);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
        return (
                <>
                <div>
        {/* Your main application content */}
        <DeveloperInfoPopup
          show={showPopup}
          onClose={handleClosePopup}
          studentName="Rohan Dashrath Dhokare"
          studentPhotoUrl="/images/rohan.jpg" // Path to their photo
          uniqueMessage="Learned so much during this OJT! This app showcases my independent coding and deployment skills"
        />
      </div>
                <Router>
                        <div className="main-layout">
                                <Header />
                                <div className="content">
                                <Routes>
                                    <Route path="/" element={<HomePage />} />
                                    <Route path="/contact" element={<ContactPage/>}/>
                                    <Route path="/about" element={<AboutPage />} />
                                    <Route path="/courses" element={<CoursesPage />} />
                                    <Route path="/admissions" element={<AdmissionsPage />}/>
                                    <Route path="" element={<NotFoundPage />} />
                                </Routes>
  
                        </div>
                        <ChatbotComponent/>
                        <Footer />
                        </div>
                        </Router>
                      </>
                 );
}
 export default App;