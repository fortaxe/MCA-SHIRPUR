"use client";

import React from "react";
import styled from "styled-components";

const CustomButton = ({ name, onClick }: { name: string; onClick: any }) => {
  return (
    <StyledWrapper>
      <button onClick={onClick} className="font-monument custom-btn">
        {name}
      </button>
    </StyledWrapper>
  );
};

// Fixed StyledWrapper with better CSS specificity
const StyledWrapper = styled.div`
  /* Increase specificity and ensure button styles override navbar styles */
  .custom-btn {

    color: #d7816a !important;
    background: white !important; /* Add explicit background */
    border-radius: 10em !important;
    font-size: 16px !important;
    font-weight: 600 !important;
    padding: 10px 14px !important;
    cursor: pointer !important;
    transition: all 0.3s ease-in-out !important;
    border: 1px solid #d7816a !important;
    box-shadow: 3px 3px 0 0 #d7816a !important;
    line-height: 100% !important;
    position: relative !important;

    /* Ensure pointer events work */
    pointer-events: auto !important;
  }

  .custom-btn:hover {
    transform: translateY(0px) translateX(0px) !important;
    box-shadow: 0 0 0 0 black !important;
  }

  .custom-btn:active {
    transform: translateY(2px) translateX(1px) !important;
    box-shadow: 0 0 0 0 black !important;
  }

  /* Additional styles to override any potential navbar interference */
  button.custom-btn * {
    pointer-events: none; /* Prevent child elements from interfering */
  }
`;

export default CustomButton;
