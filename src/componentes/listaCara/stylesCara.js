import { styled } from "./../../styles/index";


export const StylesCara = styled("section" ,{
    ".title": {
        display:"flex",
        alignItems: "center",
        marginBottom: 56,
        span: {
            fontWidth: 400,
            fontSize: "1.8rem",
            lineHeight: "2.7rem",
            color: "$white",
            opacity: 0.4,
            marginRight: "11.3rem"
        },
        h2:{
            fontWidth: 600,
            position: "relative",
            fontSize: "2.5rem",
            lineHeight: "3.5rem",
            color: "$white",
            maxWidth: "21.6rem",
            paddingLeft: "1.6rem",
            "&:before": {
                content:"",
                position: "absolute",
                top: 15,
                left: 0,
                width: 2,
                height: 45,
                backgroundColor: "$red800"
            }
        }
    }

})

export const StylesListCara = styled("div" , {
    display: "grid",
    gridTemplateColumns: "repeat(4 , 1fr)",
    gridGap: "4rem 3.3rem",
    ".marvel": {
        width:"100%",
        maxWidth:"28rem",
        height:"36.8rem",
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
    },
    "@lgScreen": {
        margin: "0 auto",
        maxWidth:"90%",
    },
    "@tablet": {
        gridTemplateColumns: "repeat(2 , 1fr)",
        gridGap: "6rem 7.5rem",
        margin: "0 auto",
        maxWidth:"80%",
        CardsCharac :{
            width:"50vh"
        }
    },
    "@mobile": {
        gridTemplateColumns: "repeat(1 , 1fr)",
    }    
})