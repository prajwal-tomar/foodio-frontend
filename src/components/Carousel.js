import React from "react";

const Carousel = () => {
  const imageStyle = {
    filter: "brightness(30%)",
  };

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://source.unsplash.com/featured/900x300?burger"
            className="d-block w-100"
            alt="..."
            style={imageStyle}
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/featured/900x300?food"
            className="d-block w-100"
            style={imageStyle}
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://source.unsplash.com/featured/900x300?pizza"
            className="d-block w-100"
            alt="..."
            style={imageStyle}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
