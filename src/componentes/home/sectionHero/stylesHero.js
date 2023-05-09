import { styled } from "./../../../styles/index";


import bgHero from "./../../../assets/bg-hero.jpg"
import { Conteiner } from "@/styles/global";
import { Linter } from "eslint";

export const SecHeroStyles = styled("section" , {
    position:"relative" , 
    zIndex:"1",
    width:"100%",
    height:731,
    backgroundImage: `url(${bgHero.src}) no-repeat  top center`,
    paddingTop:96,
    display:"flex",
    [`${Conteiner}`] : {
        display: "flex",
        alignItems: "flex-start",

    },
    "&:after": {
        content:"",
        position:"absolute",
        width:"100%",
        height:300,
        backgroundImage: "linear-gradient(transparent, #000000)"
    }
})

export const SotialArea = styled("div" , {
    width:72,
    height:"100%",
    borderLeft: "solid 1px rgba(255, 255 ,255, 0.2)",
    borderRight: "solid 1px rgba(255, 255 ,255, 0.2)",
    ul: {
        display:"flex",
        flexDirection:"column",
        alignItems: "center",
        listStyle:"none",
        padding:"30px 0",
        borderBottom: "rgba(255, 255 ,255, 0.2)",
        li:{
            "&:not(:last-child)" : {
                marginBottom:32,

            },
            a: {
                display:"block",
            }

        }  
    }
})

export const ContextText = styled("div", {
    height:"100%",
    paddingLeft:96,
    paddingRight:71,
    display: "flex",
    alignItems:"flex-end",
    justifyContent: "space-between" ,
    flex:1,
    paddingBottom:31,
    borderRight: "rgba(255, 255 ,255, 0.2)",
    ".left" : {
        flex:1,
        maxWidth:574,
        paddingBottom:"10.1rem",
        h3 : {
            fontWeight:700,
            fontSize:14,
            lineHeight:21,
            letterSpacing:"0.095rem",
            color: "#FFA800",
            marginBottom:8,
        },
        h1:{
            fontWeight:600,
            fontSize:"6.1rem",
            lineHeight:"7.1rem",
            marginBottom: 24,
            maxWidth:400,
        },
        p: {
            fontWeight:400,
            fontSize:"1.6rem",
            lineHeight:24,
            color:"$gray200",
            maxWidth:490,
            marginBottom:32,
        },
        a :{
            display:"inline-block",
            padding:"15px 52px",
            backgroundColor: "$red900",
        }
        
    }
})