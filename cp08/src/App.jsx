import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
/*import {Demo} from './components/Demo'
import  {Hola} from './components/Hola'
import {Mensaje} from './components/Mensaje'
import {Mensaje2} from './components/Mensaje2'
*/
import {TodoList} from './components/TodoList'
import {TodoForm} from './components/TodoForm'


function App() {
 
  const tareasPorRealizar =[

    {id:1, description:"Tarea 1...", realizado:true},
    {id:2, description:"Tarea 2 otro ejemplo...", realizado:true},
    {id:3, description:"Tarea 3 mas ejemplos...", realizado:false},
    {id:4, description:"Tarea 4 mas ejemplos...", realizado:false},
    {id:5, description:"Tarea 5 Otra cosa..."},

  ]

  const [todos, setTodos] = useState(tareasPorRealizar);
  const updateTodo = (id) =>{

    const newTodos = [...todos];
    const todoToToggle = newTodos.findIndex((todo) => todo.id === id);
    newTodos[todoToToggle].realizado = !newTodos[todoToToggle].realizado;
    console.log("id: "+ id + "  - Estado: " +  newTodos[todoToToggle].realizada);
    setTodos(newTodos);

  };

  const handlerSubmit = (todo) =>
  {
      console.log("Texto: "+todo);

    const newTodo ={
      id: todos.at(-1).id +1,
      description: todo,
      realizado: false,

    };

    console.log("todo id: "+newTodo.id);


    setTodos((prevTodos) => [... prevTodos, newTodo]);
  };


  return (
    <div className="App">
     <TodoList todos= {todos} onToggle={updateTodo}/>
     <TodoForm onSubmit={handlerSubmit}/>
    </div>
  )
}

export default App
