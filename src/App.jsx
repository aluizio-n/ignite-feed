import React from "react";
import Header from "./components/Header";
import './global.css';
import styles from './App.module.css';
import Sidebar from "./components/Sidebar";
import Post from "./components/Post";


const posts = [
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
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare',},
      {type: 'link', content:'jane.design/doctorcare'},
      
    ],
    publishedAt: new Date('2022-12-23 08:00:00')
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


