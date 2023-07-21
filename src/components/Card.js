import React from "react";
import "./Card.css";

const foodItems = [1, 2, 3, 4, 5, 6, 7];

function Card({ name, img, description, options }) {
  console.log(options);
  return (
    <div>
      <div className="card mb-2" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="Food" />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p class="card-text">{description}</p>
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
              Select Portion
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {options.map((option) => (
                <li key={option._id}>
                  {Object.keys(option).map(
                    (key) =>
                      key !== "_id" && (
                        <a className="dropdown-item" href="#" key={key}>
                          <p>
                            {key}: {option[key]}
                          </p>
                        </a>
                      )
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="ms-3 mt-2">Price: $109</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
