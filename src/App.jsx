import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="João Victor Ramalho Alves"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit inventore quibusdam veritatis ratione nihil dolore perferendis repellendus debitis assumenda placeat saepe laudantium ab, nulla pariatur quasi quaerat culpa iste voluptatibus!"
          />

          <Post
            author="Gabriel Weaver"
            content="Hello"
          />
        </main>
      </div>
    </div>
  )
}
