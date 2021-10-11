import React,{useState} from 'react';
import styled from 'styled-components';


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
            <h1>JavaScript <span style={{color:"red", fontSize:"2rem"}}>var, val(), if</span></h1>
            <div className="box">
                <h2>20세 이상 성인인증 체크 제이쿼리 IF 조건문</h2>
                <h2 className={check?'':'uncheck'}>{check?'성인인증이 완료되었습니다':'성인이 아닙니다'}</h2>
                <form onSubmit={onSubmit}>
                    <input onChange={onChange} value={input} type="text" placeholder="나이를 입력"/>
                    <button type="submit">성인인증</button>
                </form>
            </div>
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