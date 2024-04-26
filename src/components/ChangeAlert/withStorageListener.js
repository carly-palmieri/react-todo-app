import React from "react";

function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {
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
            props.sincronizeItems();
        }
        return <WrappedComponent
            show={storageChange}
            toggleShow={toggleShow}
        />;
    }
}

export {withStorageListener}