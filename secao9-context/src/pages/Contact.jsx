import { useCounterContext } from "../hooks/useCounterContext"
export default function Contact() {
  const { counter } = useCounterContext()
  return (
    <div>
      <h1>Contact</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  )
}
