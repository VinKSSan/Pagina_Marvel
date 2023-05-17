import { Conteiner } from "@/styles/global";
import { styled } from "./../../styles/index";


export const PageNotFauSty = styled("section" , {

    marginTop: 96,
    paddingTop: 95,
    paddingBottom: 150,
    [`${Conteiner}`] : {
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
    },
    h1: {
        fontWeight: 600,
        lineHeight: "5.9rem",
        fontSize: "4.9rem",
        marginBottom: 24,
    },
    p: {
        fontWeight: 400,
        lineHeight: "2.4rem",
        fontSize: "1.6rem",
        maxWidth: "60.1",
        marginBottom:40,
        textAlign: "center",
    },
    a: {
        display: "inline-block",
        lineHeight: "5.4rem",
        fontSize: "1.6rem",
        fontWeight: 600,
        backgroundColor: "$red900",
        padding: "0 7.3rem",
        borderRadius:5,
        color: "$white",
        marginBottom: 72,
        transition: "filter .3s ease",
        "&:hover" :{
            filter: "brightness(0.7)"
        }
    }

}

)