import "./App.css";
import { useState } from "react";
import NavBar from "./pages/NavBar";
import TopMenu from "./pages/TopMenu";
import Processes from "./pages/processes";
import Definitions from "./pages/Definitions";

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
        </>
      )}
    </>
  );
}

export default App;
