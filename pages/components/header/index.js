import { Container, Content, LogoAmbev, LogoHb } from "./styles";

const Header = ({ Component, pageProps }) => (
  <Container>
    <Content>
      <LogoHb src={"https://www.mundohbsis.com.br/files/logobranca2.png"} />
      <LogoAmbev
        src={"https://www.mundohbsis.com.br/files/logo_ambevbranco.png"}
      />
    </Content>
  </Container>
);

export default Header;
