import styles from './Post.module.css';

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/gbdsantos.png" />
          <div className={styles.authorInfo}>
            <strong>Guilherme Bezerra</strong>
            <span>Software Engineer</span>
          </div>
        </div>

        <time dateTime="2022-06-09 00:04:30" title="Nove de Maio às 00:05">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala pessoal 👋</p>
        <p>Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 </p>
        <p>Acesse e deixe seu feedback 👉{' '}<a href="" >devonlane.design</a></p>
        <p>
          <a href="">#uiux</a>{' '}
          <a href="">#userexperience</a>
        </p>
      </div>
    </article>
  );
}