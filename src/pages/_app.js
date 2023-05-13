import { Header } from "@/componentes/Header/indexHeader";
import { Footer } from "@/componentes/footer/indexFot";
import { GlobalStyles } from "@/styles/global"

GlobalStyles();
export default function App({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <Component {...pageProps} />
      <Footer/>
    </>
  )
}
