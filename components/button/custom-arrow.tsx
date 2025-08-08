import styled from "styled-components";

export const CustomArrow = ({
  img,
  onClick,
}: {
  img: string;
  onClick: any;
}) => {
  return (
    <StyledWrapper>
      <button onClick={onClick}>
        <img src={img} alt="arrow" />
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: white; /* visible background so border shows */
    border-radius: 10em;
   padding: 12px 20px;
    border: 1px solid black;
    box-shadow: 3px 3px 0 0 black;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }



  button:hover {
    transform: translate(0, 0);
    box-shadow: 0 0 0 0 black;
  }

  button:active {
    transform: translateY(2px) translateX(1px);
    box-shadow: 0 0 0 0 black;
  }
`;


export default CustomArrow;