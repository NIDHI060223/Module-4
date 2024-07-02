import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";

function TodoList() {
    const [todos, setTodos] = useState(["Milk"]);
    const [inputValue, setInputValue] = useState("");
    const [editIndex, setEditIndex] = useState(null);
    const [editValue, setEditValue] = useState("");

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, inputValue]);
            setInputValue(""); //after adding value clear input box
        }
    }

    const editTodo = (index)=>{
         setEditIndex(index);
         setEditValue(todos[index])
    }

    const saveTodo = ()=>{
        const updateTodos = [...todos];
        updateTodos[editIndex] = editValue;
        setTodos(updateTodos);
        setEditIndex(null); // Clear edit index after saving
        setEditValue(""); // Clear edit value after saving
    }

    const deleteTodo = (index)=>{
       const updateTodos = todos.filter((todo, i)=>i !== index)
       setTodos(updateTodos);
    }

    const deleteAll = ()=>{
        setTodos([]);
    }

    return (
        <div>
            <div className="container mt-5">
                <div className="row border">
                    <h1>Grocery Shopping</h1>
                    <div className="col-12 mt-5">
                        {todos.map((todo, index) => (
                            <div key={index} className="d-flex justify-content-center my-3">
                                {editIndex === index ? (
                                    <input
                                        type="text"
                                        value={editValue}
                                        onChange={(e) => {
                                            setEditValue(e.target.value);
                                        }}
                                    />
                                ) : (
                                    <div className="todoText w-25 shadow-sm p-2  bg-white">
                                        {todo}
                                    </div>
                                )}

                                <div className="Icon d-flex ml-auto">
                                    {editIndex === index ? (
                                        <button
                                            className="btn btn-primary mx-2"
                                            style={{ width: "40px" }}
                                            onClick = {saveTodo}
                                        >
                                            <FaSave />
                                        </button>
                                    ) : (
                                        <button
                                            className="btn btn-primary mx-2"
                                            style={{ width: "40px" }}
                                            onClick = {()=>editTodo(index)}
                                        >
                                            <FaEdit />
                                        </button>
                                    )}

                                    <button
                                        className="btn btn-danger"
                                         style={{ width: "40px" }}
                                         onClick = {() =>deleteTodo(index)}
                                         >
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="input-box d-flex justify-content-center mt-3">
                        <input
                            className="form-control w-25 mx-2"
                            type="text"
                            placeholder="Add your list"
                            value={inputValue}
                            onChange={(e) => {
                                setInputValue(e.target.value);
                            }}
                        />
                        <button className="btn btn-primary" type="button" onClick={addTodo}>
                            Add
                        </button>
                    </div>
                    <div className="delete justify-content-center my-5">
                        <button
                            className="btn btn-success"
                            style={{ width: "100px" }}
                            type="button"
                            onClick = {deleteAll}
                        >
                            Delete List
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodoList;
