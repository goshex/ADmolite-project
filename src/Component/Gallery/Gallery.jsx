import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleChevronLeft,
  faCircleChevronRight,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import images from "../../Assets/Images/images.json";
import "./Gallery.css";

const imagesArray = Object.values(images);

const Gallery = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const prevSlide = () => {
    setSlideNumber((slide) =>
      slide === 0 ? imagesArray.length - 1 : slide - 1
    );
  };

  const nextSlide = () => {
    setSlideNumber((slide) =>
      slide === imagesArray.length - 1 ? 0 : slide + 1
    );
  };

  return (
    <div className="main-div">
      {openModal && (
        <div className="slider-modal">
          <FontAwesomeIcon
            icon={faCircleXmark}
            className="btn-close"
            onClick={handleCloseModal}
          />
          <FontAwesomeIcon
            icon={faCircleChevronLeft}
            className="btn-prev"
            onClick={prevSlide}
          />
          <FontAwesomeIcon
            icon={faCircleChevronRight}
            className="btn-next"
            onClick={nextSlide}
          />
          <div className="full-screen-image">
            <img src={imagesArray[slideNumber].imageUrl} alt=""></img>
          </div>
        </div>
      )}
      <div className="gallery-wrap">
        {imagesArray &&
          imagesArray.map((slide, index) => {
            return (
              <div
                className="single"
                key={`image-${index}`}
                onClick={() => handleOpenModal(index)}
              >
                <img src={slide.imageUrl} alt=""></img>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Gallery;
