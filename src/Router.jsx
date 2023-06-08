import React from "react";
import {
  About,
  Home,
  Hprocurement,
  ITsupport,
  Networking,
  Voip,
  Web,
} from "./modules";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          // ************ Services pages ************
          <Route path="/web" element={<Web />} />
          <Route path="/itsupport" element={<ITsupport />} />
          {/* <Route path="/itsupport" element={<ITsupport />} /> */}
          <Route path="/procurement" element={<Hprocurement />} />
          <Route path="/voip" element={<Voip />} />
          <Route path="/networking" element={<Networking />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
