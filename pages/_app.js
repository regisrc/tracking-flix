import Global from "../styles/global";
import TopBar from "./components/header";

const MyApp = ({ Component, pageProps }) => (
  <>
    <Global />
    <TopBar />
    <Component {...pageProps} />
  </>
);

export default MyApp;
