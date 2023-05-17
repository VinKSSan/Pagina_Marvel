import { Conteiner } from "@/styles/global";
import { PageNotFauSty } from "./stylePaNoFa";
import Link from "next/link";
import Image from "next/image";

import imagemNotFau from "./../../assets/image-not-found.png"
export function PageNotFau() {

    return(
        <>
            <PageNotFauSty>
                <Conteiner>
                <h1>ops! esta página sumiu.</h1>
                <p> OHHH! , Parece que nã oconseguimos encontrar a página que
                     você está procurando. tente voltar a página anterior ou 
                     consulte nossa central de ajuda para obter mais informações.
                </p>
                <Link href="/" legacyBehavior>
                    <a>voltar</a>
                </Link>
                <Image
                    src={imagemNotFau}
                    alt="imagem not faut"
                />
                </Conteiner>
            </PageNotFauSty>
        </>
    )
}