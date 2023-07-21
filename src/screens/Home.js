import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar";
import Footer from "./Footer";
import Card from "../components/Card";
import Carousel from "../components/Carousel";

function Home() {
  const [foodItem, setFoodItem] = useState([]);
  const [foodCategory, setFoodCategory] = useState([]);

  const loadData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/fooditems/all");
      // Set the data to the states
      setFoodItem(response.data.allFoodItems);
      setFoodCategory(response.data.allFoodCategories);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="vh-100">
      <NavBar />
      <Carousel />
      <div className="container mt-3">
        {foodCategory.map((category) => (
          <div key={category._id}>
            <h2>{category.CategoryName}</h2>
            <hr />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {foodItem
                .filter((i) => i.CategoryName === category.CategoryName)
                .map((item) => (
                  <div key={item._id} className="col-12 col-md-6">
                    <Card
                      name={item.name}
                      img={item.img}
                      description={item.description}
                      options={item.options}                     
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
      <h1></h1>
      <Footer />
    </div>
  );
}

export default Home;
