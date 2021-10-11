import  {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        box-sizing: border-box;
    }

    body{
        margin: 0;
        padding: 0;
        background-color: white;
    }   

    span{
        font-weight: 600;
        font-size: 1.5rem;
    }

`
export default GlobalStyle