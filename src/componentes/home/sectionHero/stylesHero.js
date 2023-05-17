import { styled } from "./../../../styles/index";

import bgHero from "./../../../assets/bg-hero.jpg"
import { Conteiner } from "@/styles/global"; 

export const SecHeroStyles = styled("section" , {
    padding: "0 6rem",
    position:"relative" , 
    zIndex:1,
    width:"100%",
    height:731,
    backgroundImage: `url(${bgHero.src})`,
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top center",
    backgroundSize: "cover",
    paddingTop:96,
    display:"flex",
    "&:after": {
        content:"",
        position:"absolute",
        top: 0,
        left:0,
        width:"100%",
        height:"100%",
        backgroundImage: "linear-gradient(transparent, #000000)",
        zIndex:-1,
    },
    [`${Conteiner}`] : {
        display: "flex",
        alignItems: "flex-start",

    },
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
        borderBottom: "1px solid rgba(255, 255 ,255, 0.2)",
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
    borderRight: "1px solid rgba(255, 255 ,255, 0.2)",
    "& .left" : {
        flex:1,
        maxWidth:574,
        paddingBottom:"10.1rem",
        h3 : {
            fontWeight:"700",
            fontSize:"14px",
            lineHeight:"21px",
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
            lineHeight:"21px",
            color:"$gray200",
            maxWidth:490,
            marginBottom:32,
        },
        a :{
            display:"inline-block",
            padding:"15px 52px",
            backgroundColor: "$red900",
            borderRadius : 5,
            fontSize:"1.6rem",
            fontWeight:600,
            lineHeight:"2.4rem",
            color: "$white",
            trasition: "filter .10s",
            "&:hover": {
                filter : "brightness(0.7)",
            }
        }
        
    }
})