import { Conteiner } from "@/styles/global";
import { StylesCara, StylesListCara } from "./stylesCara";
import { CardsCharac } from "../cardsCharacted/indexCards";


import logoMarvel from "../../assets/logo.svg"
import imageCharac from "./../../assets/character.jpg"

import Image from "next/image";

const characteres = [
    {
        name: "KillMoger",
        image: imageCharac,
        slug: "/KillMoger",
    },
    {
        name: "KillMoge",
        image: imageCharac,
        slug: "/KillMoger",
    },
    {
        name: "KillMoer",
        image: imageCharac,
        slug: "/KillMoger",
    },
    {
        name: "KillMoger",
        image: imageCharac,
        slug: "/KillMoger",
    },
    {
        name: "KillMoge",
        image: imageCharac,
        slug: "/KillMoger",
    },
    {
        name: "KillMoer",
        image: imageCharac,
        slug: "/KillMoger",
    },
    {
        name: "KillMoer",
        image: imageCharac,
        slug: "/KillMoger",
    }

]

export function ListCara() {
    return(
        <StylesCara>
            <Conteiner>
                <div className="title">
                    <span>what if</span>
                    <h2>personagens marvel</h2>
                </div>
                <StylesListCara>
                    {
                        characteres.map(character => {
                            return(
                                <CardsCharac 
                                    image={character.image} 
                                    name={character.name}
                                    slug={character.slug}
                                    key={character.name}/>
                            ) 
                        })
                    }
                    <div className="marvel">
                        <Image alt="logo da marvel" src={logoMarvel}/>
                    </div>
                </StylesListCara>
            </Conteiner>
        </StylesCara>
    )
}