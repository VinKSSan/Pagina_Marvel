import { StyledHeader } from "./styleHeader"
import { Conteiner } from "@/styles/global"

import Image from "next/image"
import Logo from "./../../assets/logo.svg"
import Link from "next/link"
export function Header(){
    return(
        <StyledHeader>
            <Conteiner>
                <div className="logo">
                    <Link href="/">
                        <Image src={Logo} alt="logo marvel"/>
                    </Link>
                </div>
                <div className="log2">
                    <Link href="/">
                        <Image src={Logo} alt="logo marvel"/>
                    </Link>
                </div>
            </Conteiner>
        </StyledHeader>
    )
}