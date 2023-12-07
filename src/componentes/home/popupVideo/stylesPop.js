import { styled } from "../../../styles/index"




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
    "@tablet":{
        margin:'0 auto',
        paddingBottom:'5rem'
    },
    "@mobile":{
        maxWidth:'70vw',
        button:{
            height:'calc(70vw*179/312)'
        }
    }
   
})

