"use client";

import React from 'react';
import styled from 'styled-components';

const CustomButton = ({ name, onClick }: { name: string, onClick: any }) => {
  return (
    <StyledWrapper>
      <button onClick={onClick} className='font-monument'>
        {name}
      </button>
    </StyledWrapper>
  );
};

export const CustomArrow = ({ img, onClick }: { img: string, onClick: any }) => {
  return (
    <StyledWrapper>
      <button onClick={onClick}>
       <img src={img} alt="arrow"  />
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    text-transform: uppercase;
    color: black;
    border-radius: 10em;
    font-size: 10px;
    font-weight: 400;
    padding: 10px 14px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: 1px solid black;
    box-shadow: 3px 3px 0 0 black; /* initially visible shadow */
    line-height: 100%;
  
  }

  button:hover {
    transform: translateY(0px) translateX(0px); /* reset position */
    box-shadow: 0 0 0 0 black; /* remove shadow on hover */
  }

  button:active {
    transform: translateY(2px) translateX(1px);
    box-shadow: 0 0 0 0 black;
  }
`;

export default CustomButton;
