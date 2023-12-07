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

export function SecHero({data}) {
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
                        <h3>llaoe</h3>
                        <h1>{data.titlehero}</h1>
                        <p>{data.description_hero[0].text}</p>
                        <a href={data.url_button.url} target="_blank">{data.labelbutton}</a>
                    </div>
                    <PopVideo 
                        label={data.label_trailer} 
                        thumb={data.tamb_trailer.url}
                    />
                </ContextText>
            </Conteiner>
            
        </SecHeroStyles>
    )
}