import React, {useState,useMemo} from 'react'
import {useCounter} from '../../hooks/useCounter';
import '../useEffect/effects.css';

export const MemoHook = () => {

    const {counter, increment} = useCounter(2000);
    const[show,setShow] = useState(true);

    const procesoPesado = (iteraciones) => {
        for(let i=0; i<iteraciones; i++){
            console.log("Ahí vamos...")
        }

        return `${iteraciones} iteraciones realizadas`
    }

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter])
    return (
        <div>
            <h1>Memo hook</h1>
            <h3>Counter: <small>
                </small></h3>
            <hr/>
            {memoProcesoPesado}
            <button className="btn btn-primary" onClick={increment}>+1</button>
            <button className="btn btn-primary" onClick={()=>{setShow(!show)}}>Show/Hide {JSON.stringify(show)}</button>

        </div>
    )
}
