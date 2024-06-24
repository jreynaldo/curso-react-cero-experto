import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState( {
        username: 'strider',
        email: 'reynaldo@gmail.com',
    });

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
           ...formState,
           [name]:value,
        });
       
    };

    const {username, email} = formState;
    useEffect(() => {
        //console.log('useEffect called');
    },[]);

    useEffect(() => {
        // console.log('useEffect changed');
    },[formState]); 


    useEffect(() => {
        // console.log('email changed');
    },[email]); 

    

  return (
    <>
     <h1> Simple Formulario</h1>
     <hr/>
     <input
         type="text"
         className="form-control mb-2"
         placeholder="Username"
         name="username"
         value={username}
         onChange={onInputChange}
     
     />
       {
        (username==='strider2' &&  <Message/>)
       }  
     <input
      type="text"
      className="form-control mt-2"
      placeholder="ejemplo@gmail.com"
      name="email"
      value={email}
      onChange={onInputChange}
     />

    </>)
}
