import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Fabio Baldissera</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hi, I'm <span>Fabio Baldissera</span>
        </h1>
        <p>
          <Image src="/avatar.jpg" alt="Github Logo" width={200} height={200} />
        </p>
        <p className={styles.description}>
        ⚛ Computer Vision Developer
        </p>

        
        <div className={styles.techs}>
          <code className={styles.code}>Python</code>
          <code className={styles.code}>PyTorch</code>
          <code className={styles.code}>Javascript</code>
          <code className={styles.code}>React</code>
        </div>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href='https://www.linkedin.com/in/fbaldissera/'><Image src="/linkedindark.svg" alt="LinkedIn Logo" width={40} height={40} /></a>
        <a href='https://www.youtube.com/c/FabioBaldissera' ><Image src="/youtube.svg" alt="Youtube Logo" width={40} height={40} /></a>
        <a href='https://github.com/fabiopk' ><Image src="/github.svg" alt="Github Logo" width={40} height={40} /></a>
      </footer>
    </div>
  )
}
