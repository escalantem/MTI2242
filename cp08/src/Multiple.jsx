import { Fragment } from "react";

export function Multiple(){

const lista = ['linea 1', 'linea 2', 'linea 3'];

return(
    <>
        {

            lista.map(elemento => (
                <p key = {elemento}>
                    
                    { elemento  }
                
                </p>

            ))

        }
    </>

);

}