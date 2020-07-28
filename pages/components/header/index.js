import Switch from "react-switch";
import { shade } from "polished";

import { Container, Content, LogoAmbev, LogoHb } from "./styles";

const Header = ({ toggleTheme }) => {
  return (
    <Container>
      <Content>
        <LogoHb src={"https://www.mundohbsis.com.br/files/logobranca2.png"} />
        <Switch
          onChange={toggleTheme}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor={shade(0.1, "#fff")}
          onColor={"#fff"}
        />
        <LogoAmbev
          src={"https://www.mundohbsis.com.br/files/logo_ambevbranco.png"}
        />
      </Content>
    </Container>
  );
};

export default Header;
