import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./vicews/Home.jsx";
import Money from "./vicews/Money.jsx";
import Square from "./vicews/Square.jsx";
import CarCal from "./vicews/CarCal.jsx";
import BmrCal from "./vicews/BmrCal.jsx";
import Not from "./vicews/Not.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/calculator/Money" element={<Money />} />
          <Route path="/calculator/square" element={<Square />} />
          <Route path="/calculator/carcal" element={<CarCal />} />
          <Route path="/calculator/bmr" element={<BmrCal />} />
          <Route path="*" element={<Not />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
