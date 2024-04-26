import React from 'react';

function useLocalStorage(itemName, defaultValue) {
    const [sincronizedItems, setSincronizedItems] = React.useState(true);
    const [items, setItem] = React.useState(defaultValue);
    const [loading, setLoading] = React.useState(() => true);
    const [error, setError] = React.useState(() => false);

    const getState = () => {
      const localStorageItem = localStorage.getItem(itemName);
      let parsedItem = null;
      if(!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(defaultValue))
        parsedItem = defaultValue;
      } else {
        parsedItem = JSON.parse(localStorageItem);
        if(items !== parsedItem) {
          setItem(parsedItem)
        }
      };
    } 

    React.useEffect(() => {
      setTimeout(() => {
        try {
          getState();
          setLoading(false);
          setError(false);
          setSincronizedItems(true);
        } catch {
          setLoading(false);
          setError(true)
        }
      }, 500)
    }, [sincronizedItems]);
  
  
    const saveItem = (item) => {
      localStorage.setItem(itemName, JSON.stringify(item));
      setItem(item);
    }

    const sincronizeItems = () => {
      setLoading(true);
      setSincronizedItems(false);
    }
  
    return {items, saveItem, loading, error, sincronizeItems};
}

export {useLocalStorage}