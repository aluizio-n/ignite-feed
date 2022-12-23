import React from 'react'
import Avatar from './Avatar'
import Comment from './Comment'
import styles from './Post.module.css'

export default function Post(props) {
  return (
    <div>
        <article className={styles.post}>
            <header>
              <div className={styles.author}>
                <Avatar src="https://github.com/maykbrito.png"/>
                
                <div className={styles.authorInfo} >
                  <strong>Aluizio Neto</strong>
                  <span>Web Developer</span>
                </div>
              
              </div>

              <time title='12 de Dezembro ás 19:00' dateTime='2022-12-12 19:00:00'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
              <p>Fala galeraa</p>
              <p>👋Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare</p>
              <p><a href="#">jane.design/doctorcare</a></p>
              <p>
                <a href="">#novoprojeto</a> {' '}
                <a href="">#nlw </a> {' '}
                <a href="">#rocketseat</a>
              </p>
            </div>
            <form className={styles.commentForm}>
              <strong>Deixe seu feedback</strong>

              <textarea placeholder='Deixe um comentário...'
              />

              <footer>
                <button type='submit'>Comentar</button>
              </footer>
            </form>

            <div className={styles.commentList}>
              <Comment/>
              <Comment/>
              <Comment/>
            </div>
        </article>
    </div>
  )
}
