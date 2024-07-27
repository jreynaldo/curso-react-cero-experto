import React from 'react'
import {useForm} from '../hooks/useForm'

export const TodoAdd = ({onNewTodo}) => {

  const{description, onInputChange, onResetForm} = useForm({
     description : ''
  });
  const onFormSubmit = (event) =>{
    event.preventDefault();
    if(description.length <= 0) return;

    const newTodo = { 
      id: new Date().getTime(),
      done : false,
      description: description,
    }

    onNewTodo(newTodo);
    onResetForm();
  }
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input type="text" placeholder="¿Que hay que hacer?" className="form-control" value={description} name="description" onChange={onInputChange}/>
        <button type="submit" className="btn btn-primary ">Agregar</button>
      </form>
    </>
  )
}
