export type Todo = {
    id:number,
    subject:string,
    done:boolean
}

export type State = {
    nextId: number,
    todos : Todo[]
    filteredTodo : Todo[]
}

