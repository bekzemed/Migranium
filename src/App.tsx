import "./App.css";
import { useState } from "react";
import NavBar from "./pages/NavBar";
import TopMenu from "./pages/TopMenu";
import Process from "./pages/Process";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <NavBar show={show} onDone={() => setShow(!show)} />
      {!show && (
        <>
          <TopMenu />
          <Process />
        </>
      )}
    </>
  );
}

export default App;
