import styled from "styled-components";
import { lighten, darken } from "polished";

const Build = styled.div``;

export default Build;

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${(props) =>
    props.theme.title === "light"
      ? lighten(0.9, props.theme.color.secondary)
      : darken(0.9, props.theme.color.secondary)};
  border-radius: 5px;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: justify;

  padding: 20px;
`;

export const Text = styled.p`
  font-size: 20px;
  font-weight: normal;
  color: ${(props) => props.theme.color.secondary};
`;

export const LinkContainer = styled.div`
  margin-top: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  img + a {
    margin: 5px;
  }
`;

export const Link = styled.a`
  font-size: 20px;
  font-weight: normal;
`;

export const Icon = styled.img`
  width: 24px;
`;
