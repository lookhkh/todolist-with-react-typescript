import React, { useState,useCallback, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTodo, removeTodo, addTodo } from '../redux/todo'
import { RootState } from '../redux/index'
import { Todo } from '../redux/typing'

import {AppContainer,Button } from './style'
import Input from '../components/Input'
import TodoContainer from '../components/todoContainer'
import Pagination from '../components/Pagination'



const MainPage = ()=>{


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


    return(

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
    )
}

export default MainPage
