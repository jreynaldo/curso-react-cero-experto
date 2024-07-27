import React from 'react'
import {todoReducer} from "../08-useReducer/todoReducer"

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
  
    const handleNewTodo = (id) => {
      const action = {
        type: "Add Todo",
        payload: id,
      };
      dispatch(action);
    };
  
    const handleDeleteTodo = (id) => {
      dispatch({
        type: "Remove Todo",
        payload: id,
      });
    };
}
