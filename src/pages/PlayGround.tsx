import React,{useState} from 'react';
import styled from 'styled-components';
import AdultCheck from '../toycomponent/AdultCheck'
import Review from '../toycomponent/Review'

type Props={
    children:React.ReactNode
}

const PlayGround = ()=>{

    const [input, setInput] = useState('');
    const [check, setCheck] = useState(false);
    const onChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setInput(e.target.value);
    }
    const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        
        e.preventDefault();
        setCheck(false);
        const thisinput = parseInt(input);
        if(thisinput>=20){
            setCheck((prev)=>!prev);
        }
        
    }

    return(
        <PlayGroundContainer>
            {/*<AdultCheck/>*/}
            <Review/>
        </PlayGroundContainer>
    )
}

const PlayGroundContainer = styled.div`

    width: 100vw;
    height: 100vh;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    & .box{
        margin-top: 20px;
        width: 700px;
        height: 200px;
        border: 1px solid black;
        padding: 30px;
        box-shadow: 0 0 5px gray;

        & h2{
            text-align: center;
        }


        & h2.uncheck{
            color: red;
        }

        & form{
            width: 100%;
            height: 100px;
            text-align: center;
            line-height: 100px;
        }
    }
`



export default PlayGround;