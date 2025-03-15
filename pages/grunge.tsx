import Head from 'next/head'
import styles from './grunge.module.scss'

// eslint-disable-next-line max-len
const font = 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik+Iso&family=Tektur:wght@400..900&display=swap'

const GrungePage = () => {
  return (
    <>
      <Head>
        <title>
          GRUNGE
        </title>
        <link
          rel={'preconnect'}
          href={'https://fonts.googleapis.com'}
        />
        <link
          rel={'preconnect'}
          href={'https://fonts.gstatic.com'}
          crossOrigin={''}
        />
        <link
          href={font}
          rel={'stylesheet'}
        />
        <link
          rel={'stylesheet'}
          href={'https://cdn.jsdelivr.net/gh/yesiamrocks/cssanimation.io@1.0.3/cssanimation.min.css'}
        />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Праздники~Корпоративы~Свадьбы
        </h1>
        <h3 className={styles.subtitle}>INDIE-POP-ROCK-LANA DEL REY</h3>
        <audio
          className={styles.audio}
          controls
          autoPlay
        >
          <source
            src={'music.mp3'}
            type={'audio/mpeg'}
          />
          Your browser does not support the audio element.
        </audio>
        <img
          width={'260'}
          src={'IMG_2317.png'}
          className={styles.ursusSitting}
          alt={''}
        />
        <img
          width={'260'}
          src={'IMG_2312.png'}
          className={styles.ursusHead}
          alt={''}
        />
        <img
          width={'230'}
          src={'IMG_2318.png'}
          className={styles.polina1}
          alt={''}
        />
        <img
          width={'360'}
          src={'IMG_2311.png'}
          className={styles.polina2}
          alt={''}
        />
        <img
          width={'360'}
          src={'IMG_2320.png'}
          className={styles.lana1}
          alt={''}
        />
        <img
          width={'360'}
          src={'lana.png'}
          className={styles.lana2}
          alt={''}
        />
      </div>
    </>
  )
}

export default GrungePage
