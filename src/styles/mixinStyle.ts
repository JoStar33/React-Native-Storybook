import styled from "styled-components/native";

const CenterView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Card = styled(CenterView)`
  flex-direction: column;
  padding: 1%;
  width: 100%;
  border-radius: 13px;
  cursor: pointer;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.8;
`;

export { CenterView, Card };

