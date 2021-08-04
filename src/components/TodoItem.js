
const TodoItem = ({title, description, stillTodo, handleDelete}) => {

    return(
        <div>
            <h2>Title: {title} </h2>
            <p>Description: {description}</p>
            <button>Finished?</button>
            <button>Delete Item?</button>
        </div>
    );

}

export default TodoItem;

// set todo on todo.map then use map to take in obj, if obj has matching id
// to whatever id you took as an argument then you return the obj but with
// stilltodo set to false
// otherwise return the same object you turn in