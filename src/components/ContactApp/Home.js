import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import MainSection from "./MainSection";
import "../../css/home.css";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="home-body">
        {/* Sidebar/Menu Bar */}
        <Sidebar />
        {/* Main Section */}
        <MainSection />
      </div>
    </div>
  );
};

export default Home;
