import styles from './Home.module.scss'
import Header from '../../components/Header/Header'

function Home() {
  return (
    <div className={styles.wrapper}>
      <img
        className={styles.imgBackground}
        src='https://hust.edu.vn/uploads/sys/banners/cover-tin-tuc_1.jpg'
        alt='hust'
      />
      <div className={styles.wrapperHeader}>
        <Header />
      </div>
    </div>
  )
}

export default Home
