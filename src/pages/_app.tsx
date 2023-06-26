import "../styles/Global.css";
import Header from "../components/common/Header/Header";
import { RecoilRoot } from "recoil";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Header />
      <Component {...pageProps} id="component" />
    </RecoilRoot>
  );
}
