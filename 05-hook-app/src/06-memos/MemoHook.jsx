import { useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";

export const MemoHook = () => {

    const {counter, increment}=useCounter();
    const [show, setShow] = useState(true)

    return (
        <>
        <h1>Counter: <small>{counter}</small></h1>
        <hr/>

        <button onClick={() => increment()} className="btn btn-primary m-2">+1</button>
        <button className="btn btn-primary m-2" onClick={() => setShow(!show)}>Swho/Hide {JSON.stringify(show)}</button>
        </>
    )
}
