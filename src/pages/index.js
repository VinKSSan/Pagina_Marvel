import { SecHero } from "@/componentes/home/sectionHero/indexHero"
import { ListCara } from "@/componentes/listaCara/indexCara"
import { PagTi } from "@/componentes/pageTitle"
import { getPrismicClient } from "@/service/prismitc";


export default function Home({dataPage , charac}) {
 
  return (
    <>
      <PagTi title="pagina home" description="pagina de acesso geral"/>
      <SecHero data={dataPage}/>
      <ListCara data={charac}/>
    </>
  );
}



export const getStaticProps = async () => {
  const prismic = getPrismicClient();

  const contentPage = await prismic.getSingle('home');

  const charac = await prismic.getAllByType('charactere')

  
  return {
    props: {
      dataPage:contentPage.data,
      charac: charac
    },
    revalidate:60,
  };
};

