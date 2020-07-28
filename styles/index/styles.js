import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  padding: 20px 10%;
`;

export const CardContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
