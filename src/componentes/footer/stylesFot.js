import { Conteiner } from "@/styles/global"
import { styled } from "./../../styles/index"

export const StyleFotter = styled("footer" , {

    borderTop: "1px solid rgba(255,255,255, 0.2 )",
    padding:40,
    display: "flex",
    alignItems: "center",
    [`${Conteiner}`]: {
        display: "flex",
        alignItems:"flex-start",
        justifyContent: "space-between",
        "& > div": {
            display: "flex",
            alignItems: "flex-starts",
            strong :{
                fontWight: 700,
                fontSize: "1.6rem",
                lineHeight: "21px",
                color: "$white"
            },
            p: {
                flex: 1,
                maxWidth : 596,
                fontWight: 400,
                marginLeft:186,
                fontSize: "14px",
                lineHeight: "21px",
                color: "$gray500"
            },
            
        }
    },
    img: {
        width: "26rem",
        height:"100%",
        borderRadius: 5,
    },
    "@tablet": {
        flexDirection:'column-reverse',
        img:{
            marginBottom:'4rem',
        },
        [`${Conteiner}`]: {
            "& > div": {
                alignItems:'center',
                p: {
                    maxWidth:'60%',
                    margin:"0rem 2rem"
                }
            }
        }
    },
    '@mobile':{
        padding:'1rem',
        [`${Conteiner}`]: {
            "& > div": {
                flexDirection:'column-reverse',
                strong :{
                    marginTop:'2rem'
                },
                p: {
                    maxWidth:'100%',
                    textAlign:"center",
                    margin:"0rem 2rem"
                }
            }
        }
    }

})