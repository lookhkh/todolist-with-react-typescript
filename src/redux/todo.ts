import { type } from 'os';
import {State} from './typing'

const ADDTODO = 'todo/ADDTODO' as const;
const REMOVETODO = 'todo/REMOVETODO' as const;
const TOGGLETODO = 'todo/TOGGLETODO' as const;
const FILTERDONETODO = 'todo/FILTERDONETODO' as const
const ALLTODO = 'todo/ALLTODO' as const
const FILTERNOTDONETODO = 'todo/FILTERNOTDONETODO' as const

export const addTodo=(text:string)=>({
    type:ADDTODO,
    payload:text
});

export const fetchAllTodo=()=>({
    type:ALLTODO
})

export const removeTodo=(id:number)=>({
    type:REMOVETODO,
    payload:id
});

export const toggleTodo =(id:number)=>({
    type:TOGGLETODO,
    payload:id
})

export const filterOnlyDoneTodo = ()=>({
    type:FILTERDONETODO,
})

export const filterOnlyNotDoneTodo = ()=>({
    type:FILTERNOTDONETODO,
})


const init:State = {
    nextId:3,
    todos : [
        {
            id:1,
            subject:'say hi to minsoo',
            done:false
        },
        {
            id:2,
            subject:'buy milk',
            done:false
            },
],
    filteredTodo: [
        {
            id:1,
            subject:'say hi to minsoo',
            done:false
        },
        {
            id:2,
            subject:'buy milk',
            done:false
            },
]
}

type TodoActionTypes = | ReturnType<typeof addTodo>
                        | ReturnType<typeof removeTodo>
                        | ReturnType<typeof toggleTodo>
                        | ReturnType<typeof filterOnlyDoneTodo>
                        | ReturnType<typeof fetchAllTodo>
                        | ReturnType<typeof filterOnlyNotDoneTodo>

  export default function reducer(state:State=init,action:TodoActionTypes ){
    switch(action.type){
        case ADDTODO:
            return{
                ...state,
                todos:state.todos.concat({
                    id:state.nextId,
                    subject:action.payload,
                    done:false
                }),
                nextId:state.nextId+1,
            }
        case TOGGLETODO:
            return{
                ...state,
                todos:state.todos.map((a)=>{
                    if(a.id===action.payload){
                        a.done=!a.done
                    }
                    return a;
                })
            }
        case REMOVETODO:
            return{
                ...state,
                todos:state.todos.filter(a=>a.id!==action.payload)
            }

        case FILTERDONETODO:
            return{
                ...state,
                filteredTodo:state.todos.filter(a=>a.done)
            }
        case ALLTODO:
            return{
                ...state,
                filteredTodo:state.todos
            }
        case FILTERNOTDONETODO:
            return{
                ...state,
                filteredTodo:state.todos.filter(a=>!a.done)
            }
        
        default: 
            return state
    }
   
  }