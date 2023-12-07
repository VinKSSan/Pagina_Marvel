import { styled } from "./../../styles/index";


export const StylesCardCharac = styled("div" , {
    width:"100%",
    maxWidth:"28rem",
   
    "&:hover":{
        ".image" :{
            img: {
                transform: "scale(1.05)"
            }
        },
        ".info":{ 
            h3: {
                color: "$red800" 
            }
        }
    },
    a :{
        display:"block",
    },
    ".image" :{
        width:"100%",
        height:"37.2rem",
        marginBottom:16,
        borderRadius: 5,
        overflow: "hidden",
        img: {
            width:"100%",
            height: "100%",
            objectFif: "cover",
            transition: "transform .3s ease"

        }
    },
    ".info" : {
        display: "flex",
        justifyContent: "space-between",
        h3: {
            fontWidth:600,
            fontSize: "18px",
            lineHeigth: "27px",
            color: "$white",
            marginBottom:"4px",
            transition: "color .3s ease"
        },
        span: {
            fontWidth:400,
            fontSize: "14px",
            lineHeigth: "21px",
            color: "$gray500",
        }
    },
    "@tablet": {
        maxWidth:"45vh",
        ".image": {
            height: "auto"
        },
    }, 
})