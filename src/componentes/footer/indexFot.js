import { Conteiner } from "@/styles/global";
import { StyleFotter } from "./stylesFot";

import LogMarv from "./../../assets/Marvel-logo.jpg"

import Image from "next/image";


export function Footer(){
    return(
        <StyleFotter>
            <Conteiner>
                <div>
                    <strong>@F:1939 marvel studios</strong>
                    <p>A Marvel Comics é uma editora de histórias em quadrinhos americana que foi fundada em 1939 por Martin Goodman. Inicialmente, a empresa era conhecida como Timely Comics e publicava uma variedade de histórias em quadrinhos, incluindo romances, westerns e histórias de detetive.</p>
                </div>
            </Conteiner>
            <Image
                alt=""
                src={LogMarv}
                    />
        </StyleFotter>
    )
}