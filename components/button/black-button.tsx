"use client";

import React from 'react';
import styled from 'styled-components';

const BlackButton = ({ name, onClick }: { name: string, onClick: any }) => {
  return (
    <StyledWrapper>
      <button onClick={onClick}>
        {name}
      </button>
    </StyledWrapper>
  );
};



const StyledWrapper = styled.div`
  button {
    text-transform: uppercase;
    color: black;
    border-radius: 10em;
    font-size: 14px;
    font-weight: 400;
    padding: 15px 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    border: 1px solid white;
    box-shadow: 2px 5px 0 0 white; /* initially visible shadow */
    line-height: 100%;
    color: white;
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

export default BlackButton;
