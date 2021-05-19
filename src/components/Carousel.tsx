import React, { useEffect } from "react";
import styled from "styled-components";

function Carousel() {
  useEffect(() => {
    let index = 1; //total : 4
    let id = setInterval(() => {
      let prvIndex = index - 1 <= 0 ? 4 : index - 1;
      let prvLabel: any = document.querySelector(`.m${prvIndex}`);
      if (prvLabel) prvLabel.style.background = "";
      let curr: any = document.querySelector(`#r${index}`);
      let currLabel: any = document.querySelector(`.m${index}`);
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
            <img
              src='https://images.unsplash.com/photo-1574691250077-03a929faece5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGhvdGVsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              alt='s1'
            />
          </div>
          <div className='slide'>
            <img
              src='https://images.unsplash.com/photo-1537240937103-98b1d7a1c466?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGhvdGVsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              alt='s1'
            />
          </div>
          <div className='slide'>
            {" "}
            <img
              src='https://images.unsplash.com/photo-1596386461350-326ccb383e9f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG90ZWxzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              alt='s1'
            />
          </div>
          <div className='slide'>
            {" "}
            <img
              src='https://images.unsplash.com/photo-1609517448522-2e108986b505?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzJ8fGhvdGVsc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
              alt='s1'
            />
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
