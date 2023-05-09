import { ContextText, SecHeroStyles, SotialArea } from "./stylesHero"
import { Conteiner } from "@/styles/global"
import IconYouTube from "./../../../assets/youtube.svg"
import IconInstagram from "./../../../assets/instagram.svg"
import Image from "next/image"
import { PopVideo } from "@/componentes/popupVideo/indexPop"

const Sotials = [
    {
        name:"YouTube",
        url:"#",
        icon:"IconYouTube"

    },
    {
        name:"Instagram",
        url:"#",
        icon:"IconInstagram"
    },
]

export function SecHero() {
    return(
        <SecHeroStyles>
            <Conteiner>
                <SotialArea>
                    <ul>
                        {Sotials.map(({name , url , icon}) => {
                            return(
                                <li key={`sotial-${name}`}>
                                    <a href={url} target="_blank">
                                        <Image
                                            src={icon}
                                            alt={name}
                                        />                                       
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </SotialArea>
                <ContextText>
                    <div className="left">
                        <h3>Marvel studios</h3>
                        <h1> uma das maiores produtoras de filmes e séries de super-heróis do mundo</h1>
                        <p>O sucesso da Marvel Studios se deve em grande parte à sua habilidade em adaptar histórias dos quadrinhos de maneira fiel e respeitosa, mantendo o espírito dos personagens originais, mas também adicionando novos elementos e surpresas para manter o público engajado.</p>
                        <a href="" target="_blank">saiba mais</a>
                    </div>
                </ContextText>
                <PopVideo/>
            </Conteiner>
        </SecHeroStyles>
    )
}