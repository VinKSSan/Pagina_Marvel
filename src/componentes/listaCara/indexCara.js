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
        key: 1,
    },
    {
        name: "KillMoge",
        image: imageCharac,
        slug: "/KillMoger",
        key: 2,
    },
    {
        name: "KillMoer",
        image: imageCharac,
        slug: "/KillMoger",
        key: 3,
    },
    {
        name: "KillMoger",
        image: imageCharac,
        slug: "/KillMoger",
        key: 4,
    },
    {
        name: "KillMoge",
        image: imageCharac,
        slug: "/KillMoger",
        key: 5,
    },
    {
        name: "KillMoer",
        image: imageCharac,
        slug: "/KillMoger",
        key: 6,
    },
    {
        name: "KillMoer",
        image: imageCharac,
        slug: "/KillMoger",
        key:7 ,
    }

]

export function ListCara({data}) {
    return(
        <StylesCara className="AALELEK">
            <Conteiner>
                <div className="title">
                    <span>what if</span>
                    <h2>personagens marvel</h2>
                </div>
                <StylesListCara>
                    {
                        data.map(character => {
                            return(
                                <CardsCharac 
                                    image={character.data.imagecharac.url} 
                                    name={character.data.nomecharac}
                                    slug={character.data.slug}
                                    key={character.id}/>
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