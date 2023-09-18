import styles from './NavigateTopHeaderOnPc.module.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import LogoHeader from '../LogoHeader/LogoHeader'

function NavigateTopHeaderOnPc({ handleActiveInput }: { handleActiveInput: () => void }) {
  return (
    <div className={styles.wrapper}>
      <LogoHeader />
      <div className={styles.wrapperNav}>
        <ul className={styles.navList}>
          <li>
            <Link className={styles.navItem} to='/s'>
              Tuyển dụng
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} to='/s'>
              Dự án SAHEP
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} to='/s'>
              Email
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} to='/s'>
              Lịch công tác
            </Link>
          </li>
          <li>
            <Link className={styles.navItem} to='/s'>
              Liên hệ
            </Link>
          </li>

          <div className={styles.iconAndSearchWrapper}>
            <span onClick={handleActiveInput} className={styles.btnSearch}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </span>
            <div className={styles.flagWrapper}>
              <Link to='/s'>
                <img
                  className={styles.iconFlag}
                  src='https://hust.edu.vn/themes/hust/images/language/en.png'
                  alt='eng'
                />
              </Link>
              <Link to='/s'>
                <img
                  className={styles.iconFlag}
                  src='https://hust.edu.vn/themes/hust/images/language/vi.png'
                  alt='eng'
                />
              </Link>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default NavigateTopHeaderOnPc
