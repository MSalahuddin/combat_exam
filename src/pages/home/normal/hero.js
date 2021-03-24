import React, { useEffect, useState } from "react";
import { Row, Col, Container, Carousel, CarouselItem, CarouselIndicators } from "reactstrap";
import { Link } from "react-router-dom";

import api from "../../../services/api";

export default () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    (async () => {
      const { slider } = await api.get("/auth/home_page_slider");
      setSlides(slider.images);
    })();
  }, []);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === slides.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const arr = slides.map((item, i) => {
    return (
      <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={i}>
        <Row>
          {/* <Col md={5}>
            <h2>{item.title}</h2>
            <p>{item.subtitle}</p>
            <Link className="get-started" to={item.link}>
              Get Started
            </Link>
          </Col> */}
          <Col>{item.path && <img src={item.path} />}</Col>
        </Row>
      </CarouselItem>
    );
  });

  return (
    <div className="hero">
      {/* <Container> */}
      <Carousel activeIndex={activeIndex} next={next} previous={previous} ride={"carousel"}>
        {arr}
      </Carousel>
      <CarouselIndicators
        items={slides.map((e, i) => {
          return {
            title: i,
          };
        })}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {/* </Container> */}
    </div>
  );
};
