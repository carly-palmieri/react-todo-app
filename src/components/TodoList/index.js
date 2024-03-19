import './TodoList.css'

function TodoList(props) {
    return(
        <section className='TodoList-container'>
           {props.error && props.onError()}
             {(
                !props.todosResults.length && 
                !props.loading && 
                 !!props.totalTodos 
              ) && props.onNoResults(props.searchValue)
            }
            {(!props.loading && !props.totalTodos) && props.onEmpty()
            }
            <ul className='TodoList'>
                {props.loading && props.onLoading()}
                {props.todosResults.map(props.render)}
            </ul>
        </section>

    );
}

export {TodoList};