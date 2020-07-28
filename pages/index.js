import fetch from "isomorphic-unfetch";

import { Container, CardContainer } from "../styles/index/styles";
import Presentation from "./components/presentation/index";
import Card from "./components/card/index";
import Link from "next";

const Home = ({ objeto }) => {
  console.log(objeto);

  return (
    <Container>
      <Presentation />
      {objeto && (
        <CardContainer>
          {objeto.map((obt, index) => (
            <Card props={obt} />
          ))}
        </CardContainer>
      )}
      {!objeto && <h1>Nenhum video</h1>}
    </Container>
  );
};

Home.getInitialProps = async () => {
  const response = await fetch("http://dontpad.com/regis/cmVnaXM=")
    .then((res) => res.text())
    .then((body) => {
      return body;
    });

  const indexInicial = response.indexOf("textoPrincipalInicio");
  const indexFinal = response.indexOf("textoPrincipalFim");

  const responseSliced = response.slice(indexInicial, indexFinal);

  const indexInicialEspecial = responseSliced.indexOf("[");

  const responseJson = responseSliced.slice(
    indexInicialEspecial,
    response.length
  );

  return { objeto: JSON.parse(responseJson) };
};

export default Home;
