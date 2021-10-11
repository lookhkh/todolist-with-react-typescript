import React,{useState} from 'react';
import styled from 'styled-components';


const AdultCheck = ()=>{
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
        <>
            <h1>JavaScript <span style={{color:"red", fontSize:"2rem"}}>var, val(), if</span></h1>
            <div className="box">
                <h2>20세 이상 성인인증 체크 제이쿼리 IF 조건문</h2>
                <h2 className={check?'':'uncheck'}>{check?'성인인증이 완료되었습니다':'성인이 아닙니다'}</h2>
                <form onSubmit={onSubmit}>
                    <input onChange={onChange} value={input} type="text" placeholder="나이를 입력"/>
                    <button type="submit">성인인증</button>
                </form>
            </div>
        </>
    )
}


export default AdultCheck;