import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ModalProvider } from "./ModalContext";  

import HeaderSidebar from './components/Header';
import TopNavbar from './components/TopNavbar';
import Footer from './components/Footer';

import Workstation from './pages/Workstation';
import Yearlycollection from './pages/Yearlycollection';
import ClientBill from './pages/ClientBill';

const App = () => {
  return (
    <ModalProvider> 
      <Router>
        <HeaderSidebar />
        <TopNavbar />
        <Routes>
          <Route path="/" element={<Workstation />} />
          <Route path="/yearly" element={<Yearlycollection />} />
          <Route path="/clientbill" element={<ClientBill />} />
        </Routes>
        <Footer />
      </Router>
    </ModalProvider>
  );
};

export default App;
