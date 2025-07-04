// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";



// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         {/* Add more routes here */}
//       </Routes>
//     </Router>
//   );
// };


// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import SignIn from "./pages/SignIn.jsx";
import SignUp from "./pages/SignUp.jsx";
import LearnMore from "./pages/LearnMore.jsx";
import DonationPage from "./pages/DonationPage.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";

import EducationPage from "./pages/EducationPage.jsx";





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/learn-more" element={<LearnMore />} />
        <Route path="/donate" element={<DonationPage />} />
         <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/education" element={<EducationPage />} />


        
        

        
      </Routes>
    </Router>
  );
}





export default App;


