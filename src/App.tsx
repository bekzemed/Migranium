import "./App.css";
import { useState } from "react";
import NavBar from "./pages/NavBar";
import TopMenu from "./pages/TopMenu";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <NavBar show={show} onDone={() => setShow(!show)} />
      {!show && <TopMenu />}
    </>
  );
}

export default App;
