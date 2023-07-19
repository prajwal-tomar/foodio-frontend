import React from "react";

const foodItems = [
  "Pizza",
  "Burger",
  "Pasta",
  "Salad",
  "Sushi",
  "Steak",
  "Ice Cream",
  "Tacos",
];

const quantities = ["Quarter", "Half", "Full"];

function Card() {
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Food Menu</h5>
          <div className="dropdown d-inline">
            <button
              className="btn btn-success dropdown-toggle m-2"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Food
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {foodItems.map((item, index) => (
                <li key={index}>
                  <a className="dropdown-item" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="dropdown d-inline">
            <button
              className="btn btn-success dropdown-toggle m-2"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Select Quantity
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {quantities.map((item, index) => (
                <li key={index}>
                  <a className="dropdown-item" href="#">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* <div>
                Total Price: 
              </div> */}
        </div>
      </div>
    </div>
  );
}

export default Card;
