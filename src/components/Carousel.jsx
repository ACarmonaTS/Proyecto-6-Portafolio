import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';
import * as properties from "./properties"
import Card from "./Included/Card";
import info from "./Included/info";

function Carousel( ) {
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        autoplay={true}
        delay={500}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: properties.right,
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: properties.left,
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 1,
            itemsToScroll: 1,
            minWidth: 768,
          },
        ]}
        speed={500}
        easing="linear"
      > 
      <div>
        {info.map((element, index) => (
            <Card key={index} text={element.description} />
        ))}

        </div>
         {/* <div style={{ width: 300, height: 300, background: "#ff80ed" }}>
          slide 0
        </div>
        <div style={{ width: 300, height: 300, background: "#065535" }}>
          slide 1
        </div>
        <div style={{ width: 300, height: 300, background: "#000000" }}>
          slide 2
        </div>  */}

      </ReactSimplyCarousel>
    </div>
  );
}

export default Carousel