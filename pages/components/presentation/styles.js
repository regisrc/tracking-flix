import styled from "styled-components";
import { lighten } from "polished";

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${lighten(0.9, "#000")};
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
  color: #000;
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
