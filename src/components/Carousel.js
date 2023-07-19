import React from "react";

const Carousel = () => {
  const imageStyle = {
    filter: "brightness(30%)",
  };

  return (
    <div id="carouselExample" class="carousel slide">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img
            src="https://source.unsplash.com/featured/900x300?burger"
            class="d-block w-100"
            alt="..."
            style={imageStyle}
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://source.unsplash.com/featured/900x300?food"
            class="d-block w-100"
            style={imageStyle}
            alt="..."
          />
        </div>
        <div class="carousel-item">
          <img
            src="https://source.unsplash.com/featured/900x300?pizza"
            class="d-block w-100"
            alt="..."
            style={imageStyle}
          />
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
