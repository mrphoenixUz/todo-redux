import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleComplete, deleteTodo } from "../slices/todoSlice";

const Todo = () => {
    const [text, setText] = useState("");
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        setText(e.target.value);
    };

    const handleAddTodo = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            setText("");
        }
    };

    const handleToggleComplete = (id) => {
        dispatch(toggleComplete(id));
    };

    const handleDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };

    return (
        <div className="">
            <h1 className="text-3xl pt-2 justify-center items-center flex text-[#15ff00]">Todo App</h1>
            <div className="flex justify-center items-center gap-4 mt-4">
                <input
                    type="text"
                    value={text}
                    onChange={handleInputChange}
                    placeholder="Add a new todo"
                    className="bg-[#032000] rounded-md h-8 w-80 p-2 text-[#15ff00] placeholder:text-[#15ff00]"
                />
                <button className="text-[#15ff00] bg-[#032000] h-8 w-24 rounded-lg hover:bg-[#15ff00] hover:text-black" onClick={handleAddTodo}>Add Todo</button>
            </div>
            <ul className="flex items-center justify-center flex-col mt-2">
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        style={{
                            textDecoration: todo.completed ? "line-through" : "none",
                        }}
                        className="text-[#15ff00] border-[#15ff00] border-2 rounded-lg bg-black w-[500px] m-5"
                    >
                        <p className="m-5 break-words">{todo.text}</p>
                        <div className="flex justify-between m-5">
                            <button className="text-[#15ff00]" onClick={() => handleToggleComplete(todo.id)}>
                                {todo.completed ? <i className="fa-solid fa-check text-[#15ff00]">&nbsp;Incomplete</i> : <i class="fa-solid fa-check text-[#15ff00]">&nbsp;Complete</i>}
                            </button>
                            <button onClick={() => handleDeleteTodo(todo.id)}><i className="fa-solid fa-trash text-[#da3333]"></i> </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
