/* eslint-disable no-unused-vars */
import styles from './Login.module.css';
import { useAuthentication } from '../../hooks/useAuthentication';
import { useState, useEffect } from 'react';

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login, error: authError, loading } = useAuthentication()

  const cleanForm = () => {
    setEmail("")
    setPassword("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")
    const user = {
      email,
      password
    }

    const res = await login(user)

    console.log(res)
    if (!error) { cleanForm() }
  }

  useEffect(() => {
    if (authError)
      setError(authError)
  }, [authError])

  return (
    <div className={styles.login}>
      <h1>Entrar</h1>
      <p>Faça o login para entrar</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name='email'
            required
            placeholder='E-mail de usuário'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input
            type="password"
            name='password'
            required
            placeholder='Insira sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {!loading && <button className='btn'>Entrar</button>}
        {loading && <button className='btn' disabled>Carregando...</button>}
        {error && <p className='error'>{error}</p>}
      </form>
    </div>
  )
}
