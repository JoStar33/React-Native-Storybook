import styled from "styled-components/native";
import { Card } from "styles/mixinStyle";

const MovieCardContainer = styled(Card)`
  margin: 0.8vw;
  height: 70vw;
  overflow: hidden;
`;

const MovieImage = styled.Image`
  width: 45%;
  height: 45%;
  border-radius: 15px;
`;

const MovieTitle = styled.Text`
  font-size: 20px;
`;

const MovieDescription = styled.Text`
`;

export { MovieCardContainer, MovieImage, MovieTitle, MovieDescription };

