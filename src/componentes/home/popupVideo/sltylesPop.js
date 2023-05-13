import { styled } from "../../../styles/index"

import bgThumb from "./../../../assets/thumb-video.png"


export const PopVideoStyles = styled("div", {

    width: "100%",
    maxWidth: 312,
  
    span: {
        display:"block",
        fontWeight:600,
        fontSize:"12px",
        lineHeight: "18px",
        letterSpacing:"0.095em",
        color: "$gray100",
        marginBottom: 14,
    },
    button : {
        width: "100%",
        height: 179,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${bgThumb.src})`,
        background: `cover no-repeat center center`,
        backgroundColor:"transparent",
        border:0,
        borderRadius:5,
        "&:hover":{
            "& > div": {
                transform: "scale(1.1)",
            }
        },
        "& > div" : {
            width: "50px",
            height:"50px",
            background: "rgba(19 ,19, 19, 0.8)",
            backgroundFilter: "blur(2.5px)",
            borderRadius:"50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            trasition: "transform .5s ease "

        },
    }
})