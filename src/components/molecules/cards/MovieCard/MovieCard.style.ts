import styled from "styled-components/native";
import { Card } from "styles/mixinStyle";

const MovieCardContainer = styled(Card)`
  overflow: hidden;
  width: 100%;
`;

const MovieImage = styled.Image`
  width: 90%;
  height: 90%;
  border-radius: 15px;
`;

const MovieTitle = styled.Text`
  font-size: 20px;
`;

const MovieDescription = styled.Text`
`;

export { MovieCardContainer, MovieImage, MovieTitle, MovieDescription };

