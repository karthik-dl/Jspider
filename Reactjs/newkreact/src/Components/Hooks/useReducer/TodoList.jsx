import React, { useReducer, useState } from 'react';
import todo from "./ToDoList.module.css"

const initialState = {
    newItems: [],
};

const itemReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case 'AddItem':
            return {
                newItems: [...state.newItems, action.payload],
            };
        case 'DeleteItem':
            return {
                newItems: state.newItems.filter((item) => item !== action.payload),
            };
        default:
            return state;
    }
};

const TodoList = () => {
    const [itemState, dispatch] = useReducer(itemReducer, initialState);
    const [items, setItems] = useState('');

    const updateItem = ({ target: { value } }) => {
        setItems(value);
    };

    const handleAddItem = (newItem) => {
        const action = {
            type: 'AddItem',
            payload: newItem,
        };
        dispatch(action);
    };

    const handleDeleteItem = (item) => {
        dispatch({
            type: 'DeleteItem',
            payload: item,
        });
    };

    const addNewItem = () => {
        if (items.trim() !== '') {
            handleAddItem(items);
            setItems('');
        }
    };

    return (
        <div className={todo.main}>

            <div className={todo.container}>
                <h1>TodoList</h1>
                <input type="text" placeholder="Add Item" value={items} onChange={updateItem} />
                <button onClick={addNewItem}>Add</button>

                <div className={todo.items}>
                    {itemState.newItems.map((item) => (

                        <li key={item}>
                            {item}
                            <button onClick={() => handleDeleteItem(item)}>Delete</button>
                        </li>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default TodoList;