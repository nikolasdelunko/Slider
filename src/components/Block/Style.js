import styled from "styled-components";

export const Block1 = styled.div`
position: relative;
background-color: blue;
display: flex;
align-items: center;
justify-content: center;
grid-area: ${props => props.area};
`;

export const Title = styled.p`
  color: white;
`;


// grid-area: LeftHeader;