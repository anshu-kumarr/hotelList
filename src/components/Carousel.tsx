import React, { useEffect } from "react";
import styled from "styled-components";

function Carousel() {
  useEffect(() => {
    let index = 1;
    let id = setInterval(() => {
      let prvIndex = index - 1 <= 0 ? 4 : index - 1;
      let prvLabel: HTMLElement | null = document.querySelector(
        `.m${prvIndex}`
      );
      if (prvLabel) prvLabel.style.background = "";
      let curr: HTMLInputElement | null = document.querySelector(`#r${index}`);
      let currLabel: HTMLElement | null = document.querySelector(`.m${index}`);
      if (currLabel) currLabel.style.background = "white";
      if (curr) curr.checked = true;
      index >= 4 ? (index = 1) : index++;
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <CarouselContainer>
      <div className='slider'>
        <div className='slides'>
          <input type='radio' id='r1' name='r1' />
          <input type='radio' id='r2' name='r1' />
          <input type='radio' id='r3' name='r1' />
          <input type='radio' id='r4' name='r1' />

          <div className='slide select'>
            <img src={"/assets/image/car-1.jpeg"} alt='s1' />
          </div>
          <div className='slide'>
            <img src={"/assets/image/car-2.jpeg"} alt='s1' />
          </div>
          <div className='slide'>
            {" "}
            <img src={"/assets/image/car-3.jpeg"} alt='s1' />
          </div>
          <div className='slide'>
            {" "}
            <img src={"/assets/image/car-4.jpeg"} alt='s1' />
          </div>
        </div>
        <div className='manual-slide'>
          <label htmlFor='r1' className='man m1'></label>
          <label htmlFor='r2' className='man m2'></label>
          <label htmlFor='r3' className='man m3'></label>
          <label htmlFor='r4' className='man m4'></label>
        </div>
      </div>
    </CarouselContainer>
  );
}

export default Carousel;

const CarouselContainer = styled.div`
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slider {
    width: 100%;
    height: 200px;
    overflow: hidden;
  }
  .slides {
    display: flex;
    height: 200px;
    width: 400%;
  }
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }

  .slider input {
    display: none;
  }
  .manual-slide {
    width: 100%;
    margin-top: -40px;
    display: flex;
    justify-content: center;
  }
  .man {
    border: 3px solid white;
    padding: 5px;
    cursor: pointer;
    margin-right: 20px;
    border-radius: 50%;
  }
  .man:hover {
    background: white;
  }

  .slide {
    width: 25%;
    transition: 1s;
  }
  #r1:checked ~ .select {
    margin-left: 0%;
  }
  #r2:checked ~ .select {
    margin-left: -25%;
  }
  #r3:checked ~ .select {
    margin-left: -50%;
  }
  #r4:checked ~ .select {
    margin-left: -75%;
  }
`;
