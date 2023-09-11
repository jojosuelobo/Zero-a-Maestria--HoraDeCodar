/* eslint-disable no-unused-vars */
import styles from './CreatePost.module.css'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'

export default function CreatePost() {
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.create_post}>
      <h2>Criar Post</h2>
      <p>Escreva seu post...</p>
      <form>
        <label>
          <span>Título: </span>
          <input
            type="text"
            name='title'
            required
            placeholder='Pense em um título...'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </label>
        <label>
          <span>URL da imagem: </span>
          <input
            type="text"
            name='image'
            required
            placeholder='Insira uma imagem...'
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </label>
        <label>
          <span>Conteudo: </span>
          <textarea
            name='body'
            required
            placeholder='Insira uma imagem...'
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </label>
        <label>
          <span>Tags: </span>
          <input
            type="text"
            name='tags'
            required
            placeholder='Insira suas tags separado por vírgula...'
            onChange={(e) => setTags(e.target.value)}
            value={tags}
          />
        </label>
        <button className='btn'>Cadastrar</button>
        {!loading && <button className='btn'>Cadastrar</button>}
        {loading && <button className='btn' disabled>Carregando...</button>}
        {error && <p className='error'>{error}</p>} 
      </form>
    </div>
  )
}
