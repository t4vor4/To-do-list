function TodoItem({ tarefa, aoRemover}) {
    return(
        <li style={{marginBottom:'10px'}}>
            <span>
                {tarefa}
            </span>
            <button onClick={aoRemover} className="remove">
                <small>x</small>
            </button>
        </li>
    );
}

export default TodoItem;