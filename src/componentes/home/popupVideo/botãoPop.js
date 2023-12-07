

import { styled } from '@stitches/react';



export const MeuBotao = styled('button', {

//para definir a propriedade backgroundImage dinamicamente com base em props no pacote Stitches    
    
    // Estilos e outros atributos aqui
    
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    width: "100%",
    height: 179,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
        transition: "transform .5s ease "

    },
})
