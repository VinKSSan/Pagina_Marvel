import Link from "next/link";
import { StylesCardCharac } from "./stylesCards";

import Image from "next/image";
import { useRouter } from "next/router";



export function CardsCharac( {image , name , slug }) {

    let hrefValue = `characters/${slug}`

    const router= useRouter();
    const currentPage = router.asPath; 

    
    if(currentPage.includes('/characters/')) {
        hrefValue = `${slug}`
    }
    return(
        <StylesCardCharac>
            <Link legacyBehavior href={hrefValue}>
                <a className="aDiv">
                    <div className="image">
                        <Image
                            width={280}
                            height={372}
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