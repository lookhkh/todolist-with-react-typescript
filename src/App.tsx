import React, { useState,useCallback, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled  from 'styled-components';
import Input from './components/Input'
import TodoContainer from './components/todoContainer'
import { RootState } from './redux/index'
import { toggleTodo, removeTodo, addTodo } from './redux/todo'
import Pagination from './components/Pagination'
function App() {


const { todos } = useSelector((state:RootState) =>state.todo)
const dispatch = useDispatch();

const onToggle = useCallback((id:number)=>{
  dispatch(toggleTodo(id))
},[dispatch])

const onRemove = useCallback((id:number)=>{
  dispatch(removeTodo(id))
},[dispatch])

const onInsert = useCallback((text:string)=>{
  dispatch(addTodo(text))
},[dispatch]);

const moveTopage = useCallback((page:number)=>{
  setCurrentPage(page);
},[]);

const [currentPage,setCurrentPage] = useState(1);
const limit = useRef(3);



  return (
    <div style={{width:'100vw',height:'100vh',backgroundColor:'gray'}} className="App">
      <Container>
        <AppContainer>
          <header>
              <Input onInsert={onInsert} header={"현일이의 TodoList with Typescript"} />
          </header>
              <TodoContainer msg={"시발"} todos={todos.slice((currentPage-1)*limit.current,currentPage*limit.current)} onToggle={onToggle} onRemove={onRemove}/>
          <Pagination onClick={moveTopage} limit={limit.current} currentPage={currentPage} wholeTodo={todos.length} />
        </AppContainer>
      </Container>
    </div>
  );
}

export default App;

const Container=styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #ac8585;
  display: flex;
  justify-content: center;
  align-items: center;
 
`
const AppContainer=styled.div`
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


