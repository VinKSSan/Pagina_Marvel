import { PageNotFau } from "@/componentes/pageNotFound/indexPaNoFa";
import { PagTi } from "@/componentes/pageTitle";

export default function PageNotFaut() {
    return(
        <>
            <PagTi title="não encontrada" description="pagina de não encontrados"></PagTi>
            <PageNotFau/>
        </>
    )
}