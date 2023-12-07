import Image from "next/image";
import icon_Play from "./../../../assets/play.svg"

import imagem from "./../../../assets/thumb-video.png"
import { PopVideoStyles } from "./stylesPop"
import { MeuBotao } from "./botãoPop";


export const PopVideo = ({label, thumb}) => {

   

    return(
        <PopVideoStyles>
            <span>{label}</span>
            <MeuBotao style={{backgroundImage:`url(${thumb})`}}>
                <div>
                    <Image src={icon_Play} alt="icone de play(icon_play)"/>
                </div>
            </MeuBotao>
        </PopVideoStyles>
    )
}