import { useEffect, useState } from "react";
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

const {formState, onInputChange,onResetForm, username, email, password}= useForm({
    username:'',
    email:'',
    password:'',
});


    

  return (
    <>
     <h1> Form With Custom Hook</h1>
     <hr/>
     <input
         type="text"
         className="form-control mb-2"
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

<input
      type="text"
      className="form-control mt-2"
      placeholder="ejemplo@gmail.com"
      name="password"
      value={password}
      onChange={onInputChange}
     />
 <button className="btn btn-primary mt-2" onClick={onResetForm}> Borrar</button>
    </>)
}
