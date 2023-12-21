import React, { useState } from "react";
import { Modal, Carousel } from "react-bootstrap";
import { TfiClose } from "react-icons/tfi";

const Lightbox = ({ images, alt }) => {
  const [show, setShow] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleShow = (index) => {
    setSelectedImageIndex(index);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <ul>
        {images.map((image, index) => (
          <li key={index}>
            <button onClick={() => handleShow(index)}>
              <img
                src={image}
                alt={`${alt} #${index + 1}`}
                style={{ cursor: "pointer" }}
              />
            </button>
          </li>
        ))}
      </ul>

      <Modal
        show={show}
        onHide={handleClose}
        fullscreen={true}
        className="lightbox"
      >
        <Modal.Body>
          <Carousel
            activeIndex={selectedImageIndex}
            onSelect={(index) => setSelectedImageIndex(index)}
            keyboard={true}
            interval={null}
          >
            {images.map((image, index) => (
              <Carousel.Item key={index}>
                <img src={image} alt={`이것은 ${index + 1}`} />
              </Carousel.Item>
            ))}
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>
            <TfiClose />
            {/* &times; */}
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Lightbox;
