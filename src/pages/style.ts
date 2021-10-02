import  styled  from "styled-components"

export const AppContainer=styled.div`
  width: 80%;
  height: 80%;
  background-color: white;

  & header{
    width: 100%;
    height: 15%;
    background-color: violet;
    text-align: center;

    & h1{
        margin:0;
        height: 40%;
        
    }
  }

  & .todo-container{
      width: 100%;
      height: 85%;
      background-color: yellow;
  }
`
export const Button =styled.button`
  display: inline-block;
  width: 60px;
  height: 25px;
  border: none;
  background-color: transparent;

  &.selected{
    background-color: white;
  }
  

`
