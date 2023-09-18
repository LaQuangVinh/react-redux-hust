import logo from '../../../assets/image/logoSchool.png'
import Navbar from 'react-bootstrap/Navbar'
import ConstRoutes from '../../../routes/ConstRoutes'
import styles from './LogoHeader.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function LogoHeaderOnPc() {
  return (
    <div className={styles.wrapperLogo}>
      <Navbar.Brand className={styles.logoHome} href={ConstRoutes.home}>
        <img src={logo} alt='hust' />
        <div className={styles.nameSchoolList}>
          <span className={cx('nameSchoolItem', 'nameSchoolVie')}>ĐẠI HỌC BÁCH KHOA HÀ NỘI</span>
          <span className={cx('nameSchoolItem', 'nameSchoolEng')}>HANOI UNIVERSITY OF SCIENCE AND TECHNOLOGY</span>
        </div>
        <div>
          <ul className={styles.nameSchoolListOnSmallScreen}>
            <li className={cx('nameSchoolItem', 'nameSchoolVie')}>ĐẠI HỌC</li>
            <li className={cx('nameSchoolItem', 'nameSchoolVie')}>BÁCH KHOA HÀ NỘI</li>
            <li className={cx('nameSchoolItem', 'nameSchoolEng')}>HANOI UNIVERSITY</li>
            <li className={cx('nameSchoolItem', 'nameSchoolEng')}>OF SCIENCE AND TECHNOLOGY</li>
          </ul>
        </div>
      </Navbar.Brand>
    </div>
  )
}

export default LogoHeaderOnPc
