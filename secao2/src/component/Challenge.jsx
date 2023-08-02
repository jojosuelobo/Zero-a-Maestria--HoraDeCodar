/* eslint-disable no-unused-vars */
import React, { useState } from 'react'

export default function Challenge() {

    const [a, setA] = useState(Math.floor((Math.random() * 10)))
    const [b, setB] = useState(Math.floor(Math.random() * 10))
    const [resp, setResp] = useState()

    const handleSoma = () => {
        console.log(a + b)
        setResp(a + b)
        setA(Math.floor((Math.random() * 10)))
        setB(Math.floor((Math.random() * 10)))
    }

    return (
        <div>
            <h1>{a} e {b}</h1>
            <button onClick={handleSoma}>Somar</button>
            <h1>{resp}</h1>
        </div>
    )
}
