import { SecHero } from "@/componentes/home/sectionHero/indexHero"
import { ListCara } from "@/componentes/listaCara/indexCara"
import { PagTi } from "@/componentes/pageTitle"


export default function Home() {
  return (
    <>
      <PagTi title="pagina home" description="pagina de acesso geral"/>
      <SecHero/>
      <ListCara/>
    </>
  )
}
