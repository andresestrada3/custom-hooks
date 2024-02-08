import { useState } from 'react';


export const useCounter = ( initialValue=10 ) => {
    
    const [counter, setCounter] = useState( initialValue );

    const incrementar = ( value = 1 ) => {
        // setCounter( counter + value );
        setCounter( (current) => current + value ); //Para que tome el valor anterior cuando llamo dos veces la funcion incrementar();
    }

    const disminuir = ( value = 1) => {
        if (counter === 0) {
            return;
        }
        setCounter( (current) => current - value );
    }

    const resetear = () => {
        setCounter( initialValue );
    }
    
    return {
        counter,
        incrementar,
        disminuir,
        resetear
    }
}