import styled from "styled-components";

const Build = styled.div``;

export default Build;

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  height: 250px;
  width: 48%;
  overflow: hidden;
  background-color: #19458d;

  @media only screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  word-wrap: break-word;

  padding: 20px;
`;

export const Title = styled.h1`
  font-weight: bold;
  color: #fafafa;
  font-size: 25px;
  text-align: center;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  color: #fafafa;
  font-size: 20px;
  text-align: justify;

  @media only screen and (max-width: 600px) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }
`;

export const Image = styled.img`
  width: 200px;
  height: 120px;
`;

export const ContentDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 50%;
`;
