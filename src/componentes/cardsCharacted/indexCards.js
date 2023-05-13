import Link from "next/link";
import { StylesCardCharac } from "./stylesCards";

import Image from "next/image";

export function CardsCharac( {image , name , slug }) {
    return(
        <StylesCardCharac>
            <Link legacyBehavior href={`characters/${slug}`}>
                <a className="aDiv">
                    <div className="image">
                        <Image
                            width={"280px"}
                            height={"372px"}
                            src={image}
                            alt="imagem do personagem"
                        /> 
                    </div>
                    <div className="info">
                        <div>
                            <h3>{name}</h3>
                            <span>marver</span>
                        </div>
                        <span>wti if</span>
                    </div>
                </a>
            </Link>
            
        </StylesCardCharac>
    )
}