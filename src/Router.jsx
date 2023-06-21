import React from "react";
import {
  AVR,
  About,
  Blog,
  CCTV,
  Career,
  Cyber,
  Home,
  Hosted,
  Hprocurement,
  ITsupport,
  MApp,
  Networking,
  Voip,
  Web,
  Work,
} from "./modules";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
  return (
    <>
      <BrowserRouter>
        <div className="screen_width">
          <div className="screen_width_content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/career" element={<Career />} />
              // ************ Services pages ************
              <Route path="/web" element={<Web />} />
              <Route path="/itsupport" element={<ITsupport />} />
              <Route path="/procurement" element={<Hprocurement />} />
              <Route path="/voip" element={<Voip />} />
              <Route path="/hosted" element={<Hosted />} />
              <Route path="/networking" element={<Networking />} />
              <Route path="/cyber" element={<Cyber />} />
              <Route path="/mobileapp" element={<MApp />} />
              <Route path="/arvr" element={<AVR />} />
              <Route path="/cctv" element={<CCTV />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default Router;
