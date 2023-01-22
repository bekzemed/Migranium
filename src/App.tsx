import { Route, Routes } from "react-router-dom";
import "./App.css";
import { AboutBusiness } from "./pages/AboutBusiness";
import { AboutYou } from "./pages/AboutYou";
import Customers from "./pages/Customers";
import Dashboard from "./pages/Dashboard";
import { ForgotPassword } from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Settings from "./pages/Settings";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import Terms from "./pages/Terms";
import WaitList from "./pages/Waitlist";
import ScrollToTop from "./util/scrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/about-business" element={<AboutBusiness />} />
        <Route path="/about-you" element={<AboutYou />} />
        <Route path="/dashboard">
          <Route index element={<Dashboard />} />
          <Route path="waitlist" element={<WaitList />} />
          <Route path="messages" element={<Messages />} />
          <Route path="customers" element={<Customers />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
