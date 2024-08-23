import { useSelector, useDispatch } from "react-redux";
import { deleteTodoItem, editTodoItem } from '../redux/todoListReducer'
import { useState } from 'react';

function TodoList() {
    const todoList = useSelector(state => state.todoList);

    const dispatch = useDispatch() ;

    const [newTodoItem, setNewTodoItem] = useState('');
    const [editingItemId, setEditingItemId] = useState(null);

    const handleEdit = (id, updates) => {
        dispatch(editTodoItem({ id, updates }));
    }

    const handleInputChange = (id, e) => {
        if (id === editingItemId) {
            setNewTodoItem(e.target.value);
        }
    }

    const handleEditClick = (id) => {
        setEditingItemId(id);
        setNewTodoItem(todoList.find(item => item.id === id).todoItem);
    }

    const handleSaveClick = (id) => {
        handleEdit(id, { todoItem: newTodoItem });
        setNewTodoItem('');
        setEditingItemId(null);
    }

    return (
        <ul>
            {todoList.map((item) => (
                <div>
                    <li key={item.id}>{item.todoItem}</li>
                    <button onClick={()=> dispatch(deleteTodoItem(item.id))}>delete</button>
                    {editingItemId === item.id ? (
                        <input type="text" value={newTodoItem} onChange={(e) => handleInputChange(item.id, e)} />
                    ) : (
                        <span>{item.todoItem}</span>
                    )}
                    {editingItemId === item.id ? (
                        <button onClick={() => handleSaveClick(item.id)}>save</button>
                    ) : (
                        <button onClick={() => handleEditClick(item.id)}>edit</button>
                    )}
                </div>
            ))}
        </ul>
    );
}

export default TodoList;