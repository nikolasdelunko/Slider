import styled from "styled-components";

export const BtnGroup = styled.div`
  border-radius: 6px;
  padding: 6px;
  background-color: #00000091;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: ${(props) => (props.primary ? "100%" : "172px")};
  position: ${(props) => (props.primary ? "relative" : "absolute")};
  bottom: 5px;
`;

export const BtnBlockMain = styled.div`
  display: flex;
  gap: 5px;
`;

export const PageCounter = styled.h1`
  gap: 5px;
  border: 1px solid white;
  padding: 0 14px;
  color: white;
`;

export const Btn = styled.button`
  align-items: center;
  background: #ffffff;
  border: 0 solid #e2e8f0;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-sizing: border-box;
  color: #1a202c;
  display: inline-flex;
  font-family: Inter, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  height: 56px;
  justify-content: center;
  line-height: 24px;
  overflow-wrap: break-word;
  padding: 24px;
  text-decoration: none;
  width: auto;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  touch-action: manipulation;
`;

export const InpPhoto = styled.input`
  visibility: hidden;
  z-index: 0;
  position: absolute;
`;

export const BoxBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
`;
// border: ${props => props.primary ? "1px solid black" : "null"}
// ${props => props.primary ? "relative" : "absolute"};
