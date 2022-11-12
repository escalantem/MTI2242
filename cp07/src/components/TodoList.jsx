import { TodoItem } from "./TodoItem";

export function TodoList({onToggle, todos = []})
{


    if(todos.length === 0)
    {
        return <p>No hay tareas pendientes...</p>
    }

    let norealizados = todos.filter(({realizado}) => !realizado);
    

    return (
        
        <>
        <p>Tareas pendientes: {norealizados.length}</p>
        <p>Total Tareas: {todos.length} </p>
        <ul>

            {

                todos?.map(({id, description, realizado}) =>

                (
                    <TodoItem key= {id} 
                              id = {id}  
                              description = {description} 
                              realizado= {realizado} 
                              onToggle = {onToggle}
                              />
                )
                
                
                )

            }

        </ul>
       </>
    );
}