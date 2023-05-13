import { Conteiner } from "@/styles/global";
import { styled } from "../../styles/index";

export const StyledHeader = styled("header" , {
    position: "absolute",
    top:0,
    width:"100%",
    height:96,
    borderBottom: "solid 1px rgba(255  , 255 , 255, 0.2)",
    display: "flex",
    alignItems:"center",
    zIndex: 2023,
    [`${Conteiner}`] : {
        height:"100%",
        borderLeft: "solid 1px rgba(255  , 255 , 255, 0.2)",
        borderRight: "solid 1px rgba(255  , 255 , 255, 0.2)",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center"

    },
    ".logo" : {
        position:"relative",
        paddingLeft:23,
        "&:before": {
            content: "",
            backgroundColor: "$red800",
            boxShadow: "0px  2px 4px  rgba(255 , 4 , 13 , 0.16)",
            position: "absolute",
            width: 104,
            height:1,
            bottom: -24, 
            left: 23,

        }
        
    },
    ".log2": {
        display:"flex",
        alignItems:"center",
        height:"100%",
        padding: "0 23px",
        borderLeft: "solid 1px rgba(255  , 255 , 255, 0.2)",       

    }




})
