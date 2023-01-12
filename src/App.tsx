import "./App.css";
import { useState } from "react";
import NavBar from "./pages/NavBar";
import TopMenu from "./pages/TopMenu";
import Processes from "./pages/processes";
import Definitions from "./pages/Definitions";
import Operations from "./pages/Operations";
import CreateWaitList from "./pages/CreateWaitList";
import Clients from "./pages/Clients";
import ContactUs from "./pages/ContactUs";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <NavBar show={show} onDone={() => setShow(!show)} />
      {!show && (
        <>
          <TopMenu />
          <Processes />
          <Definitions />
          <Operations />
          <CreateWaitList />
          <Clients />
          <ContactUs />
        </>
      )}
    </>
  );
}

export default App;
