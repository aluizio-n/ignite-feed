import { ThumbsUp, Trash } from "phosphor-react";
import React from "react";
import styles from './Comment.module.css';
import Avatar from "./Avatar";

export default function Comment({content}) {

    function handleDeleteComment(){
        console.log('delete')
    }


  return (
    <div className={styles.comment}>
    <Avatar hasBorder={false} src="https://github.com/aluizio-n.png"/>
    
    <div className={styles.commentBox}>
        <div className={styles.commentContent}>
            <header>
                <div className={styles.authorAndTime}>
                    <strong>Aluizio Neto</strong>
                    <time title='12 de Dezembro ás 19:00' dateTime='2022-12-12 19:00:00'>Cerca de 1h atrás</time>
                </div>

                <button onClick={handleDeleteComment} title="Deletar comentário">
                    <Trash size={24} />
                </button>
            </header>

            <p>{content}</p>

        </div>

        <footer>
           <button>
            <ThumbsUp size={24}/>
            Aplaudir <span>20</span>
           </button>
        </footer>
    </div>
    
    
    
    
    </div>
  )
}
