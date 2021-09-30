import React, { VFC } from 'react'
import styled from 'styled-components'
import {Todo} from '../redux/typing'

type propTypes = {
  msg : string,
  todos : Todo[],
  onToggle : (id:number)=>void
  onRemove : (id:number)=>void
}

const TodoContainer = ({msg,todos,onToggle,onRemove}:propTypes)=>{

  console.log(msg)
    return(
        <div className="todo-container">    
          {todos.map(a=>
          <Card key={a.id}>
            <p>{a.id}</p>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <span>{a.subject}</span>
                <div>
                  <input type="checkbox" checked={a.done} onChange={()=>onToggle(a.id)}/>
                  <button onClick={()=>onRemove(a.id)}>삭제</button>
                </div>
             </div>
            </Card>)}
          </div>
    )
}


const Card = styled.div`
  width: 100%;
  height: 18%;
  background-color: white;
  border: 1px solid black;
`

export default TodoContainer