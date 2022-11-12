import { useState } from "react";

const VALIDATION = /^([a-záéíóúñA-ZÁÉÍÓÚÑ0-9\s]*)$/;

export function TodoForm({onSubmit}){

    const [{todo, todoError}, setTodoField] = useState({todo:"", todoError:""});

    const todoChangeHandler = (e) => {

        let newError ="";

        const matchesRegex = VALIDATION.test(e.target.value);

        if(!matchesRegex)
        {
            newError ="Formato no permitido.";
        }

        setTodoField({todo: e.target.value, todoError: newError});
    }

    const handlerSubmit = (e) =>
    {
        e.preventDefault();

        if(todoError.length >0)
        {
            return;
        }

        setTodoField(({todo, todoError})=> {
                    return {todo, todoError:""}
            }
        );

        if(todo.length === 0)
        {
            setTodoField(({todo, todoError})=> {
                                                    return {todo, todoError:"El campo no puede estar vacío."}
                                                 }
                        );
            return;

        }

      onSubmit(todo);  
      setTodoField({todo:"", todoError:""});


    };





    return (

        <form onSubmit={handlerSubmit}>

            <h3>Agregar Nueva Tarea pendiente</h3>
            <label>Descripcion</label>
            <input type="text" id="input-todo" name="input-todo" onChange={todoChangeHandler}>

            </input>
            <p> {todoError}</p>
            <button type="submit">Agregar tarea</button>

        </form>

    );

}