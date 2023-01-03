import React, { useState, FormEvent, ChangeEvent } from 'react';
import Avatar from './Avatar';
import Comment from './Comment';
import styles from './Post.module.css';
import {format, formatDistanceToNow, set} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR'


interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' |  'link'
  content: string;
}

export interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}


export default function Post({author, publishedAt, content}: PostProps) {


const [comments, setComments] = useState([
  'Post muito legal, ein?'
])

const [newCommentText, setnewCommentText] = useState('')

const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", {
  locale: ptBR
})

const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
  locale: ptBR, 
  addSuffix: true,
})

function handleCreateNewComment(event:FormEvent){
 event.preventDefault()

 setComments([...comments, newCommentText])
 setnewCommentText('')

}

function handleNewCommentChange(event:ChangeEvent<HTMLTextAreaElement>){
  event.target.setCustomValidity('')
  setnewCommentText(event.target.value)
}

function onDeleteComment(commentToDelete:string){
  const commentsWithoutDeletedOne = comments.filter(comment => {
    return comment != commentToDelete
  })

  setComments(commentsWithoutDeletedOne)
}

function handleNewCommentInvalid(event:ChangeEvent<HTMLTextAreaElement>){
  event.target.setCustomValidity('Esse campo é obrigatorio!')
}

const isNewCommentEmpty = newCommentText.length === 0


  return (
    <div>
        <article className={styles.post}>
            <header>
              <div className={styles.author}>
                <Avatar src={author.avatarUrl}/>
                
                <div className={styles.authorInfo} >
                  <strong>{author.name}</strong>
                  <span>{author.role}</span>
                </div>
              
              </div>

              <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                {publishedDateRelativeToNow}
              </time>
            </header>


            <div className={styles.content}>
             {content.map(line => {
              if (line.type === 'paragraph') {
              return <p key={line.content}>{line.content}</p>
            }
              else if (line.type === 'link'){
              return <p key={line.content}><a href='#'>{line.content}</a></p>
            }
             })}
            </div>


            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
              <strong>Deixe seu feedback</strong>

              <textarea 
              name='comment'
              placeholder='Deixe um comentário...'
              onChange={handleNewCommentChange}
              value={newCommentText}
              onInvalid ={handleNewCommentInvalid}
              required 
              />

              <footer>
                <button type='submit' disabled={isNewCommentEmpty} >Comentar</button>
              </footer>
            </form>

            <div className={styles.commentList}>
              {comments.map(comment => {
                return <Comment
                         key={comment}
                         content={comment}
                         onDeleteComment={onDeleteComment}
                        />
              })}
            </div>
        </article>
    </div>
  )
}
