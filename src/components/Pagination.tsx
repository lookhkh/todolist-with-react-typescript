import React, { VFC,useMemo } from 'react'
import styled from 'styled-components'

type proptypes = {
    currentPage :number,
    wholeTodo : number,
    limit : number
    onClick : (page:number)=>void
}

export default function Pagination({currentPage,wholeTodo,limit,onClick}:proptypes){
    console.log(currentPage,wholeTodo,limit)

    const index = useMemo(()=>Math.ceil(wholeTodo/limit),[wholeTodo,limit])
    const lists = useMemo(()=>{
        const result = [];
        for(let i=1; i<=index; i++){
            result.push(i);
        }
        return result;
    },[index])


    
    return(
        <div>
            {lists.map(a=><Btn key={a} onClick={()=>onClick(a)} className={a===currentPage?'active':''} href="#">{a}</Btn>)}
        </div>
    )
}

const Btn = styled.a`
    text-decoration: none;
    display: inline-block;
    width: 30px;
    height: 30px;
    background-color: white;
    text-align: center;
    line-height: 30px;

     &.active{
        background-color: black;
        color: white;
    }
`