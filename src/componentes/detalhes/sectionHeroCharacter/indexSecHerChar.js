import { Conteiner } from "@/styles/global";
import { StySecHerChar } from "./stylesSecHerChar";
import Image from "next/image";

import imagemCharac from "./../../../assets/character.jpg" 

export function SecHerChar() {
    return(
        <>
            <StySecHerChar>
                <Conteiner>
                    <div className="image">
                        <Image
                            src={imagemCharac}
                            alt="imagem do personagem"
                        />
                    </div>
                    <div className="info">
                        <span>Historia</span>
                        <div>
                            <h1>Nome do personagem</h1>
                            <p>a historia do personagem quasque completa,
                                com detalhes de raça ou espécie habilidades
                                especiais, super poderes etc... 
                                muito mais- jy</p>
                        </div>
                    </div>
                </Conteiner>
            </StySecHerChar>
        </>
    )
}