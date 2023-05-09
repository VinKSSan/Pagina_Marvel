import { globalCss, styled } from "./index";

export const GlobalStyles = globalCss({
    "*": {
        padding:0,
        margin:0,
        boxSizing: "border-box",
        fontFamily: "poppins , sans serif",

    },
    html: {
        fontSize: "62.5%",

    },
    body: {
        "webKit-font-smoothing": "antialiased",
        background: "linear-gradient( 119.36deg ,#010101 0%, #000000 100%)",
        color: "$white",
        
    },
    img: {
        maxWidth:"100%",
        display: "block"
    },
    button: {
        cursor:"pointer",
    }

})

export const Conteiner = styled("div" , {
    width: "100%" ,
    maxWidth: 1216,
    margin:"0 auto",

})