import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import ScrollToTop from "./util/scrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </>
  );
}

export default App;
