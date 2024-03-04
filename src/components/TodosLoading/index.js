import './TodosLoading.css'

function TodosLoading() {
    return(
        <div className='LoadingTodo'>
            <span className='LoadingTodo-Check'></span>
            <span className='LoadingTodo-Text'></span>
            <span className='LoadingTodo-Delete'></span>
        </div>
    );
}

export {TodosLoading};