import React,{useEffect, useMemo, useRef, useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'



const Review = ()=>{

    const [check,setCheck] = useState(0);
    const balls = useRef(["a","2","3","4","5"]);
    const [title,setTitle] = useState('');

    useEffect(()=>{
        if(check<=2){
            setTitle("아쉬워요")
        }
        else if(check<=4){
            setTitle("잘했어요")
        }
        else{
            setTitle("판타스틱!!!!!!!")
        }
    },[check]);

    const onClick = (e:any)=>{
        setCheck(e.target.dataset.target)
    }

    return(
        <div style={{borderRadius:'10px',display:'flex',position:'relative', alignItems:"center", width:"500px",height:"50px",border:'1px solid black', backgroundColor:"black"}}>  
            {balls.current.map((ball,index)=>{
                return <Ball key={ball} data-target={index+1} onClick={onClick} className={index<check?"checked":""}/>
            })}
            <span style={{position:'absolute', right:'230px', color:'white'}}>별점:{check}</span>
            <span style={{position:'absolute', right:'30px', color:'white'}}>{title}</span>
        </div>
    )
}


const Ball = styled.span`
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 30px;
    margin-right: 5px;
    
    &.checked{
        background-color: gold;
    }

`

export default Review;
