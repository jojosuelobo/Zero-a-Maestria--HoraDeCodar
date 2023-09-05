/* eslint-disable no-unused-vars */
import styles from './About.module.css'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className={styles.about}>
      <h2>Sobre o Mini <span>Blog</span></h2>
      <p>Este projeto consiste em um blog feito em Front-end em REACT e FIREBASE para o Back-End </p>
      <Link to='/posts/create' className='btn'>Criar Post</Link>
    </div>
  )
}
