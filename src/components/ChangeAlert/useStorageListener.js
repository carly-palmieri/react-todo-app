import React from "react";

function useStorageListener(sincronizeItems) {
    const [storageChange, setStorageChange] = React.useState(false);
    
    React.useEffect(() => {
        window.addEventListener('storage', (change) => {
            if(change.key === 'TODOS') {
                console.log('cambio en TODOS');
                setStorageChange(true)
            }
        })
    }, []);
    
    const toggleShow = () => {
        setStorageChange(false);
        sincronizeItems();
    }
    return {show: storageChange, toggleShow};
}

export {useStorageListener}