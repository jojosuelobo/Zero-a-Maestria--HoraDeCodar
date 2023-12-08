import { useState } from 'react'

export default function HookUseState() {
    let username = 'joao'
    const [name, setName] = useState('Matheus')

    const changeName = () => {
        username = 'Joao Souze'
        setName('Matheus de Souza')
    }

    const [age, setAge] = useState(18)
    const handleSubmit = (e) => {
        e.preventDefault()

        // Envio a API de dados
        console.log(age)
    }

    return <div>
        {/* UseState */}
        <h2>UseState</h2>
        <p>Variavel: {username}</p>
        <p>useState: {name}</p>
        <button onClick={changeName}>Mudar nomes!</button>

        <p>&&</p>

        {/* useState e Inputs */}
        <form onSubmit={handleSubmit}>
            <label>Digite sua idade</label>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
            <input type="submit"/>
        </form>
        <p>Você tem {age} anos</p>

        <hr />
    </div>
}
