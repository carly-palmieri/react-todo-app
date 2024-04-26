import React from "react";
import {withStorageListener} from './withStorageListener'
import './ChangeAlert.css' 

function ChangeAlert({show, toggleShow}) {
    if(show) {
        return <div className="ChangeAlert-background">
            <div className="ChangeAlert-container">
                <p>Hubo cambios en tus TODOs en otra pestaña</p>
                <p>Es necesario sincronizar la información para seguir realizando operaciones</p>
                <button 
                    className="TodoForm-button TodoForm-button-add"
                    onClick={() => toggleShow()}
                >Sincronizar</button>
            </div>
        </div>
    }
    return null
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export {ChangeAlert, ChangeAlertWithStorageListener}