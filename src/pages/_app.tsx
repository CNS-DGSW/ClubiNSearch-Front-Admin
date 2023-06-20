import "../styles/Global.css";
import Header from "../components/common/Header/Header";
import Footer from "@/components/common/footer/Footer";
import type { AppProps } from "next/app";


export default function App({Component, pageProps} : AppProps) {
    return (
        <>
        <Header/>
        <Component {...pageProps} id="component"/>
        </>
    )
}