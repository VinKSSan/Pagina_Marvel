import Image from "next/image";
import icon_Play from "./../../../assets/play.svg"

import { PopVideoStyles } from "./sltylesPop";

export function PopVideo() {
    return(
        <PopVideoStyles>
            <span>ASSISTA AO TRAILER</span>
            <button>
                <div>
                    <Image src={icon_Play} alt="icone de play(icon_play)"/>
                </div>
            </button>
        </PopVideoStyles>
    )
}