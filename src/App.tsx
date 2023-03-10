import React from 'react';
import Header from './components/Header';
import './global.css';
import styles from './App.module.css';
import Sidebar from './components/Sidebar';
import Post from './components/Post';
import { PostProps } from './components/Post';

interface Posts extends PostProps{
  id: number
}


const posts:Posts[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare',},
      {type: 'link', content:'jane.design/doctorcare'},
      
    ],
    publishedAt: new Date('2022-12-22 10:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/maykbrito.png',
      name: 'Mayk Brito',
      role: 'Educator @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala meu povo 👋'},
      {type: 'paragraph', content: 'Meu nome é Maykao e sou educator na rocketseat ;)',},
      {type: 'link', content:'www.rocketseat.com.br/ignite'},
      
    ],
    publishedAt: new Date('2022-12-23 08:00:00')
  },
  {
    id: 3,
    author: {
      avatarUrl: 'https://github.com/aluizio-n.png',
      name: 'Aluizio Neto',
      role: 'Web Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala seus lindos!'},
      {type: 'paragraph', content: 'Fazendo esse post de teste aqui',},
      {type: 'link', content:''},
      
    ],
    publishedAt: new Date('2023-01-03 08:00:00')
  },
  
]


export default function App() {

  return (
      
       
          <div>
            <Header />
            <div className={styles.wrapper}>
              <Sidebar />
              <main>
                {posts.map(post => {
                  return (
                    <Post 
                      key={post.id}
                      author={post.author}
                      content={post.content}
                      publishedAt={post.publishedAt} 
                    />
                  )
                })}
              </main>
            </div>
          </div>
        
  )
}


