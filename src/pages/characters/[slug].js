import { SecHerChar } from "@/componentes/detalhes/sectionHeroCharacter/indexSecHerChar";
import { ListCara } from "@/componentes/listaCara/indexCara";
import { PagTi } from "@/componentes/pageTitle";
import { useRouter } from "next/router"

export default function pageCharacter() {
    const roter = useRouter();
    
    return(
        <>
            <PagTi title="pagina de personagens"/>
            <SecHerChar/>
            <ListCara/>
        </>
    )
}