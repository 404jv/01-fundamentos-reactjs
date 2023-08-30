import styles from './Post.module.css'

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img 
            src="https://github.com/404jv.png"
            alt="Avatar do usuário"
            style={styles.avatar}
          />
          <div className={styles.authorInfo}>
            <strong>João Victor Ramalho Alves</strong>
            <span>Web Developer</span>
          </div>
        </div>
        
        <time title="08 de Agosto às 08:13h" dateTime="2023-08-30 08:13:30">
          Publicado há 1h
        </time>
      </header>
      
      <div>
        <p>Fala galeraa 👋</p>

        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>

        <p>👉 <a href="">jane.design/doctorcare</a></p>

        <p><a href="">#novoprojeto #nlw #rocketseat</a></p>
      </div>

    </article>
  )
}
