import React from "react";
import NavBar from "../components/NavBar";
import Footer from "./Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div className="vh-100">
      <NavBar />
      <Carousel />
      <div className="d-flex justify-content-center mb-5">
        <div className="m-3">
          <Card />
        </div>
        <div className="m-3">
          <Card />
        </div>
        <div className="m-3">
          <Card />
        </div>
        <div className="m-3">
          <Card />
        </div>
        <div className="m-3">
          <Card />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
