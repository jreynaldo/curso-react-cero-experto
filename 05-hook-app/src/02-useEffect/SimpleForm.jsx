import { useEffect, useState } from "react";

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

    useEffect(() => {
        console.log('useEffect called');
    });
    const {username, email} = formState;

  return (
    <>
     <h1> Simple Formulario</h1>
     <hr/>
     <input
         type="text"
         className="form-control"
         placeholder="Username"
         name="username"
         value={username}
         onChange={onInputChange}
     
     />
         
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
