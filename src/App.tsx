import React, { useState,useCallback, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled  from 'styled-components';
import Input from './components/Input'
import TodoContainer from './components/todoContainer'
import { RootState } from './redux/index'
import { toggleTodo, removeTodo, addTodo } from './redux/todo'
import Pagination from './components/Pagination'
import {Todo} from './redux/typing'
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'



function App() {


const { todos } = useSelector((state:RootState) =>state.todo);
const [todoLists, setTodoLists] = useState<Todo[]>(todos)
const [currentBtn, setCurrentBtn] = useState<string>('전체');

useEffect(()=>{


  console.log(todos)
  setTodoLists(todos);
  setCurrentBtn('전체');
  console.log("유즈이펙트")
},[todos])


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

const filterOnlyDoneTodo =(e:React.MouseEvent<HTMLElement>)=>{
  setTodoLists(todos);
  e.stopPropagation();
  setTodoLists(todos.filter(a=>a.done));
  setCurrentPage(1)
  setCurrentBtn("완료")
}

const filterOnlyNotDoneTodo = (e:React.MouseEvent<HTMLElement>)=>{
  setTodoLists(todos);
  e.stopPropagation();
  setTodoLists(todos.filter(a=>!a.done));
  setCurrentPage(1)
  setCurrentBtn("미완료")

}

  return (
    <div style={{width:'100vw',height:'100vh',backgroundColor:'gray',}} className="App">
      <Container>
        <AppContainer>
          <header>
              <Input onInsert={onInsert} header={"현일이의 TodoList with Typescript"} />
              <div style={{marginTop:'10px'}}>
                <Button className={currentBtn==='전체'?"selected":''} onClick={()=>{setTodoLists(todos);setCurrentBtn("전체")}}>전체</Button>
                <Button className={currentBtn==='완료'?"selected":''} onClick={filterOnlyDoneTodo}>완료</Button>
                <Button className={currentBtn==='미완료'?"selected":''} onClick={filterOnlyNotDoneTodo}>미완료</Button>
              </div>
          </header>
              <TodoContainer msg={"시발"} todos={todoLists.slice((currentPage-1)*limit.current,currentPage*limit.current)} onToggle={onToggle} onRemove={onRemove}/>
          <Pagination onClick={moveTopage} limit={limit.current} currentPage={currentPage} wholeTodo={todoLists.length} />
        </AppContainer>
        <FontAwesomeIcon onClick={()=>alert('등록페이지 만들 예정')} style={{fontSize:'3rem',position:'fixed', right:'50px',bottom:'0'}} icon={faPlusCircle}/>    
      </Container>
    </div>

)}

export default App;

const Container=styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: #ac8585;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
 
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
const Button =styled.button`
  display: inline-block;
  width: 60px;
  height: 25px;
  border: none;
  background-color: transparent;

  &.selected{
    background-color: white;
  }
  

`


