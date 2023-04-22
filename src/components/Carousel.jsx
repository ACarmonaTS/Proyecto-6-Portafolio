import React, { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";
import * as properties from "./properties";
import Card from "./Included/Card";
import info from "./Included/info";

function Carousel() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="carousel">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        autoplay={true}
        delay={4500}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: properties.right,
          children: <span style={{ cursor: "pointer" }}>{`>n`}</span>,
        }}
        backwardBtnProps={{
          style: properties.left,
          children: <span style={{ cursor: "pointer" }}>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
          },
        ]}
        speed={500}
        easing="linear"
      >
        {info.map((element, index) => (
          <Card key={index} title={element.title} text={element.description} />
        ))}
      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel;
