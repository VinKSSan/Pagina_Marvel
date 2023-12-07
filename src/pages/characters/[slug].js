import { useRouter } from "next/router";
import { SecHerChar } from "@/componentes/detalhes/sectionHeroCharacter/indexSecHerChar";
import { ListCara } from "@/componentes/listaCara/indexCara";
import { PagTi } from "@/componentes/pageTitle";
import { getPrismicClient } from "@/service/prismitc";


//criando a lista de rotas
export default function PageCharacter({character , characters}) {

   const router = useRouter();

   if(router.isFallback) {
    return <p>carregando...</p>
   } 
    
    return(
        <>
            <PagTi title="pagina de personagens"/>
            {character &&  <SecHerChar data={character}/>}
            {characters && <ListCara data={characters}/>}
        </>
    )
}


//listando as opções
export const getStaticPaths = async () => {
    const prismic = getPrismicClient()

    const characters = await prismic.getAllByType("charactere")

    const paths = characters.map(({data}) => {
    
        return {
            params: {slug: data.slug},
        };
    });
    
    return {
        paths,
        fallback:true

    };
}

export const getStaticProps = async (context) => {

    const prismic = getPrismicClient()
    const characters = await prismic.getAllByType("charactere")

    const character =  characters.find(({data}) => {
        
        
        return data.slug === context.params.slug
        
    })
  
   
    
    characters.splice(characters.findIndex((e) => {
        return e.data.slug === character.data.slug
    }), 1)
    

    return{
        props: {
            character:character.data,
            characters,
        }

    }
    

}

//para verificar se tudo está certo "yarn build"