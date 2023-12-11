import { useReducer, useState } from 'react'

export default function HookUseReducer() {
    // 1
    const [number, dispatch] = useReducer((state, action) => {
        return Math.random(state)
    })

    // 2
    const initialTask = [
        { id: 1, text: "Fazer algo" },
        { id: 2, text: "Fazer outra coisa" },
        { id: 3, text: "Fazer mais outra coisa" },
    ]
    const taskReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                const newTask = {
                    id: Math.random(),
                    text: taskText
                }

                setTaskText("")

                return [...state, newTask]
            case "DELETE":
                return state.filter((task) => task.id != action.id)
            default:
                return state
        }
    }

    const [taskText, setTaskText] = useState("")
    const [tasks, dispatchTasks] = useReducer(taskReducer, initialTask)

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatchTasks({ type: "ADD" })
    }

    const removeTask = (id) => {
        dispatchTasks({ type: "DELETE", id })
    }

    return (
        <div>
            <h2>useReducer</h2>
            <p>Números: {number}</p>
            <button onClick={dispatch}>Alterar número!</button>

            <p>&&</p>

            <h3>Tarefas:</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={(e) => setTaskText(e.target.value)} />
                <input type="submit" value="Enviar" />
            </form>
            {tasks.map((task) => (
                <li key={task.id}>
                    {task.text}
                    <button onClick={() => removeTask(task.id)} >Deletar</button>
                </li>
            ))}

            <hr />
        </div>
    )
}
