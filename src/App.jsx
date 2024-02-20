import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import  AboutPage from "./pages/main/AboutPage"
import HomePage from "./pages/main/Homepage"
import LegitCheckPage from "./pages/main/LegitCheckPage"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/legit-check" element={<LegitCheckPage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
