import { ContextText, SecHeroStyles, SotialArea } from "./stylesHero"
import { Conteiner } from "@/styles/global"
import IconYouTube from "./../../../assets/youtube.svg"
import IconInstagram from "./../../../assets/instagram.svg"
import Image from "next/image"
import { PopVideo } from "@/componentes/home/popupVideo/indexPop"

const Sotials = [
    {
        name:"YouTube",
        url:"#",
        icon:IconYouTube,

    },
    {
        name:"Instagram",
        url:"#",
        icon:IconInstagram,
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
                        <h3>Marvel Studios</h3>
                        <h1> uma das maiores produtoras de mundo</h1>
                        <p>O sucesso da Marvel Studios se deve em 
                            grande parte e surpresas para manter o 
                            público engajado.</p>
                        <a href="" target="_blank">saiba mais</a>
                    </div>
                    <PopVideo/>
                </ContextText>
            </Conteiner>
            
        </SecHeroStyles>
    )
}