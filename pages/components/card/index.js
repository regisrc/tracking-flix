import { Container, Content, ContentDesc, Title, Text, Image } from "./styles";

const Header = ({ props }) => (
  <Container>
    <Content>
      <a href={props?.Link} target="_blank">
        <Image src={props?.Img} />
      </a>
      <ContentDesc>
        <Title>{props?.Title}</Title>
        <Text>{props?.Desc}</Text>
      </ContentDesc>
    </Content>
  </Container>
);

export default Header;
