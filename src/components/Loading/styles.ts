import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.COLORS.GRAY_600};
`;

export const LoadIndicator = styled.ActivityIndicator`
`;