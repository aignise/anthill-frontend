
import {
  Routes,
  Route,
} from "react-router-dom";

import Screen1 from "./pages/screen1/screen1.js";
import Screen2 from "./pages/screen2/screen2.js";
import Screen3 from "./pages/screen3/screen3.js";
import Screen4 from "./pages/screen4/screen4.js";




function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Screen1/>} />
      <Route path="/screen2" element={<Screen2/>} />
      <Route path="/screen3" element={<Screen3/>} />
      <Route path="/screen4" element={<Screen4/>} />
    </Routes>

    
    
   

    );
}
export default App;
