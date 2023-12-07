import { Conteiner } from "@/styles/global";
import { styled } from "./../../../styles/index";


export const StySecHerChar = styled("section" , {

    marginTop: 96,
    borderBottom: "1px solid rgba(255,255,255,0.2)",
    marginBottom: 50,
    padding:"0 60px",
    [`${Conteiner}`]: {
        display: "flex",
        alignItems: "center",
        height:"100%",
        borderLeft: "1px solid rgba(255,255,255,0.2)",
        borderRight: "1px solid rgba(255,255,255,0.2)",
    },
    ".image" : {
        borderRadius:5,
        overflow: "hidden",
        height: "100%",

    },
    ".info": {
        flex:1,
        maxWidth: "65rem",
        marginLeft: "3.2rem",
        display: "flex",
        span : {
            display:"block",
            marginTop: 20,
            fontWeight: 400,
            fontSize: "1.8rem",
            lineHeight: "2.7rem",
            color: "$gray400",
            opacity: 0.6,  
        },
        "& > div": {
            position: "relative",
            flex: 1,
            maxWidth: 546,
            paddingLeft: 27,
            marginLeft:19,
            "&:before":{
                content: "",
                position: "absolute",
                top: 12,
                left:0, 
                width:"4px",
                height: "46px",
                backgroundColor: "$red800",
            },
            h1 : {
                fontWeight: 600,
                fontSize: "6.1rem",
                lineHeight : "7.1rem",
                color :"$white",
                marginBottom: 13,
            },
            p : {
                fontWeight: 400,
                fontSize: "1.6rem",
                lineHeight : "2.4rem",
                color :"$gray400",  
            }

        }

    },
    "@tablet":{
        padding:'0 2rem',
        ".info": {
            flexDirection:'column',
            height:'50%',
            margin:'0 3rem',
            "& > div": {
                width:'100%',
                maxWidth:'100%',
                padding:'0',
                "&:before":{
                    content: "",
                    position: "absolute",
                    top: 2,
                    left:-18, 
                    width:"80px",
                    height: "4px",
                    backgroundColor: "$red800",
                },
                h1 : {
                    fontSize:'4rem'
                },
                p: {
                    width:'100%',
                }
            }
        },
        ".image" : {
            height: "calc(48vw*413/305)",
            width:"48vw",
            ".imag":{
                height:"auto"
            }
        },
    },
    "@mobile":{
        "& > div": {
            width:'auto',
            p: {
                width:'90% !important',
            }
        },
        ".contains":{
            ".info": {
                width:'100%'
            },
            paddingTop:'2rem',
            display:'flex',
            alignItems:"center",
            justifyContent:"center",
            flexDirection:'column',
            ".image" : {
                height: "calc(70vw*413/305)",
                width:"70vw",
            },
        }
    }


})