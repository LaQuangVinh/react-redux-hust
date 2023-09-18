import styles from './NavigateTopHeaderOnMobile.module.scss'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import LogoHeader from '../LogoHeader/LogoHeader'

function NavigateTopHeaderOnMobile({ handleActiveInput }: { handleActiveInput: () => void }) {
  return (
    <div className={styles.wrapper}>
      <LogoHeader />

      {/* <li>
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
          </li> */}

      <div className={styles.flagWrapper}>
        <Link to='/s'>
          <img className={styles.iconFlag} src='https://hust.edu.vn/themes/hust/images/language/en.png' alt='eng' />
        </Link>
        <Link to='/s'>
          <img className={styles.iconFlag} src='https://hust.edu.vn/themes/hust/images/language/vi.png' alt='eng' />
        </Link>
      </div>

      <span className={styles.btnSearch} onClick={handleActiveInput}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>

      <span className={styles.btnBars}>
        <FontAwesomeIcon icon={faBars} />
      </span>
    </div>
  )
}

export default NavigateTopHeaderOnMobile
