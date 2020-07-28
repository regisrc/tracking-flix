import { Container, Content, Text, LinkContainer, Link, Icon } from "./styles";

const Presentation = ({ Component, pageProps }) => (
  <Container>
    <Content>
      <Text>
        Site criado com o intuito de centralizar videos e links interessantes
        para os desenvolvedores do time TRACKING T2, caso você esteja
        interessado em contribuir com links, documentos, artigos ou algo
        relacionado a estudos entre em contato com o Regis da squad pegasus:
      </Text>
      <LinkContainer>
        <Icon src={"https://image.flaticon.com/icons/png/512/174/174857.png"} />
        <Link href={"https://www.linkedin.com/in/filipe-eduardo-98999b166/"}>
          LinkedIn
        </Link>
      </LinkContainer>
    </Content>
  </Container>
);

export default Presentation;
