import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import  aboutpage from "./pages/main/aboutpage"
import homepage from "./pages/main/homepage"
import legitcheckpage from "./pages/main/legitcheckpage"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<homepage/>}/>
        <Route path="/about" element={<aboutpage/>}/>
        <Route path="/legitcheckpage" element={<legitcheckpage/>}/>
      </Routes>
    </Router>
  );
};

export default App;
