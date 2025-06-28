import React from "react";
import Header from "./static/Header"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Invest from "./pages/Invest";
import Stories from "./pages/Stories";
import FAQs from "./pages/FAQs";
import Resources from "./pages/Resources";
import Save from "./pages/Save";

 

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/resources" element={<Resources />} />    
          <Route path="/save" element={<Save/>} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
};

export default App;
