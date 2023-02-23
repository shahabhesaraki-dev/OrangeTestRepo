import { BrowserRouter, Routes, Route } from "react-router-dom";
import Palindrome from "./Components/FirstQuestion/Palindrome";
import Weather from "./Components/SecondQuestion/Weather";
import Home from "./Components/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/firstQuestion/*" element={<Palindrome />} />
        <Route path="/secondQuestion/*" element={<Weather />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
