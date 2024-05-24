import styled from "styled-components";
import {myTodos} from "./data/todos";
import {useState} from "react";
import List from "./Components/List";
import uuid from "react-uuid";
import {DndContext} from "@dnd-kit/core";
import {SortableContext} from "@dnd-kit/sortable";

function App() {
    // set the state and default to myTodos
    const [todos, setTodos] = useState(myTodos)
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!value || value.length < 3) {
            return alert("Todo task must be at least 3 characters")
        }

        const newTodos = [...todos, {
            id: uuid(),
            name: value,
            completed: false
        }]

        setTodos(newTodos)
        // clear input
        setValue('')
    }

    const removeTodo = (id) => {
        // only returns the task id that do not match the id thats clicked
        const filtered = todos.filter((todo) => {
            return todo.id !== id
        })
        setTodos(filtered)
    }

    return (
        <AppStyled className="App">
            <form action="" onSubmit={handleSubmit} className="form">
                <h1>Today's Tasks</h1>
                <div className="input-container">
                    <input type="text"
                           value={value}
                           onChange={handleChange}
                           placeholder="Add a Task"
                    />
                    <div className="submit-btn">
                        <button>+ Add Todo</button>
                    </div>
                </div>
            </form>

            <DndContext>
                <SortableContext items={todos.map((todo) => todo.id)}>
                    <ul className="todos-con">
                        {
                            todos.map((todo) => {
                                const {id, name, completed} = todo;
                                return <List
                                    key={id}
                                    id={id}
                                    name={name}
                                    completed={completed}
                                    removeTodo={removeTodo}
                                />
                            })
                        }
                    </ul>
                </SortableContext>
            </DndContext>

        </AppStyled>
    );
}

const AppStyled = styled.div`
    
`

export default App;