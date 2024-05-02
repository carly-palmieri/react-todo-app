import React from "react";
import {useStorageListener} from './useStorageListener'
import './ChangeAlert.css' 

function ChangeAlert({sincronizeItems}) {
    const {show, toggleShow} = useStorageListener(sincronizeItems)
    if(show) {
        return <div className="ChangeAlert-background">
            <div className="ChangeAlert-container">
                <p>Hubo cambios en tus TODOs en otra pestaña</p>
                <p>Es necesario sincronizar la información para seguir realizando operaciones</p>
                <button 
                    className="TodoForm-button TodoForm-button-add"
                    onClick={() => {
                        toggleShow();
                    }}
                >Sincronizar</button>
            </div>
        </div>
    }
    return null
}

export {ChangeAlert}