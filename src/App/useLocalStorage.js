import React from 'react';

const initialState = (defaultValue) => ({
  sincronizedItems: true,
  items: defaultValue,
  loading: true,
  error: false
});

function useLocalStorage(itemName, defaultValue) {
    const [state, dispatch] = React.useReducer(reducer, initialState(defaultValue));
    const {
      sincronizedItems,
      items,
      loading,
      error
    } = state;

    const onError = (error) => {
      dispatch({type: actionTypes.error, payload: error})
    };
    const onSuccess = (items) => {
      dispatch({type: actionTypes.success, payload: items})
    };
    const onSave = (items) => {
      dispatch({type: actionTypes.save, payload: items})
    };
    const onSincronize = () => {
      dispatch({type: actionTypes.sincronize})
    };

    React.useEffect(() => {
      setTimeout(() => {
        try {
          const localStorageItem = localStorage.getItem(itemName);
          if(!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(defaultValue))
          } else {
            const parsedItem = JSON.parse(localStorageItem);
            if(items !== parsedItem) {
              onSuccess(parsedItem);
            }
          };
        } catch {
          onError(error);
        }
      }, 500)
    }, [sincronizedItems]);
  
  
    const saveItem = (items) => {
      try {
        localStorage.setItem(itemName, JSON.stringify(items));
        onSave(items);
      } catch(error) {
        onError(error);
      }
    }

    const sincronizeItems = () => {
      onSincronize();
    }
  
    return {items, saveItem, loading, error, sincronizeItems};
}

const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  sincronize: 'SINCRONIZE',
  save: 'SAVE'
}

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    loading: false,
    error: true
  },
  [actionTypes.success]: {
    ...state,
    loading: false,
    error: false,
    sincronizedItems: true,
    items: payload
  },
  [actionTypes.save]: {
    ...state,
    items: payload
  },
  [actionTypes.sincronize]: {
    ...state,
    loading: true,
    sincronizedItems: false,
  }
})

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state
}

export {useLocalStorage}