import { useState } from "react";

import NavBar from "./NavBar";
import TopMenu from "./TopMenu";
import Processes from "./processes";
import Definitions from "./Definitions";
import Operations from "./Operations";
import CreateWaitList from "./CreateWaitList";
import Clients from "./Clients";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

function Home() {
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
          <Footer />
        </>
      )}
    </>
  );
}

export default Home;
