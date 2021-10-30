import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        padding:0;
        margin: 0;
    }
    div{
        caret-color: black;
    }
    button{
        margin-top: 50px;
        padding: 10px 20px;
        background-color: rgb(94,179,223);
        color: white;
        border-radius: 10px;
    }
`