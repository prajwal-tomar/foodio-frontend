import React from "react";
import NavBar from "../components/NavBar";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <div className="container mt-5">
        <h1 className="mb-4">About Foodio</h1>
        <p>
          Foodio is an online food ordering app that aims to provide you with a
          seamless and delightful food ordering experience. We understand the
          importance of good food and how it can bring people together, whether
          it's a family dinner, a friendly gathering, or a solo indulgence.
        </p>
        <p>
          Our platform offers a wide range of restaurants and cuisines, giving
          you access to delicious dishes from around the world. From comforting
          classics to exotic delights, Foodio has something for everyone's taste
          buds.
        </p>
        <p>
          At Foodio, we prioritize quality and freshness. We work closely with
          our partner restaurants to ensure that each dish is prepared with love
          and care. Your satisfaction is our top priority, and we go the extra
          mile to make sure you receive your order on time and in perfect
          condition.
        </p>
        <p>
          Our user-friendly interface allows you to browse through menus,
          customize your orders, and make secure payments with ease. With
          Foodio, you can experience the joy of delicious food without the
          hassle of cooking or going out.
        </p>
        <p>
          Whether you're craving your favorite comfort food or want to explore
          new culinary delights, Foodio has got you covered. Join us on this
          culinary adventure and let's celebrate the love for food together!
        </p>
        <p className="fw-bold">Bon appétit!</p>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
