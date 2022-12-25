import styled from "styled-components";

export const MainBox = styled.div`
  width: 100%;
`;

export const UpperBox = styled.div`
  display: grid;
  grid-template-columns: 30% 50%; //! тут по шырене блоков вверх и низ
  grid-template-rows: 300px 300px; //! тут по Высоте блоков вверх и низ
  gap: 5px; //! растояние между блоками
  grid-template-areas: "LeftHeader RightHeader RightHeader" "leftCenter leftCenter RightCenter";
  padding-bottom: 5px;
`;

export const Title = styled.p`
  color: white;
`;

export const DownBox = styled.div`
  display: grid;
  grid-template-columns: 30% 50%; //! тут по шырене блоков вверх и низ
  grid-template-rows: 300px 300px; //! тут по Высоте блоков вверх и низ
  gap: 5px; //! растояние между блоками
  grid-template-areas: "LeftHeader RightHeader RightHeader" "leftCenter leftCenter RightCenter";
  padding-bottom: 5px;
`;

export const Block1 = styled.div`
  position: relative;
  background-color: ${(props) => props.background};
  opacity: ${(props) => props.opacity};
	height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: LeftHeader;
`;
export const Block2 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.background};
  opacity: ${(props) => props.opacity};
	height: ${(props) => props.height};
  width: ${(props) => props.width};
  grid-area: RightHeader;
`;
export const Block3 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.background};
  opacity: ${(props) => props.opacity};
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  grid-area: leftCenter;
`;
export const Block4 = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.background};
  opacity: ${(props) => props.opacity};
	height: ${(props) => props.height};
  width: ${(props) => props.width};
  grid-area: RightCenter;
`;

export const BtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 25%, 50%, 75%, 100%
