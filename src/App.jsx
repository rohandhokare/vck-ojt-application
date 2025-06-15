import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPages";
import CoursePage from "./pages/CoursesPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdmissionPage from "./pages/AdmissionPage";

const App = () => {
  return(
    <>
      <Router>
        <Routes>
          <Route path ="/" element={<HomePage/>} />
          <Route path="/home" element={<HomePage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
           <Route path="/courses" element={<CoursePage/>}/>
            <Route path="/contact" element={<ContactPage/>}/>
             <Route path="/notfound" element={<NotFoundPage/>}/>
              <Route path="/admission" element={<AdmissionPage/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App;