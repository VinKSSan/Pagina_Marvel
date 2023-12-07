import { Conteiner } from "@/styles/global";
import { StySecHerChar } from "./stylesSecHerChar";
import Image from "next/image";


export function SecHerChar({data}) {
    return(
        <>
            <StySecHerChar className="LLLEK">
                <Conteiner className="contains">
                    <div className="image">
                        <Image
                            className="imag"
                            src={data.imagecharac.url}
                            width={data.imagecharac.dimensions.width}
                            height={data.imagecharac.dimensions.height}
                            alt="imagem do personagem"
                        />
                    </div>
                    <div className="info">
                        <span>Historia</span>
                        <div>
                            <h1>{data.nomecharac}</h1>
                            <p>{data.descripitioncharac[0].text}</p>
                        </div>
                    </div>
                </Conteiner>
            </StySecHerChar>
        </>
    )
}