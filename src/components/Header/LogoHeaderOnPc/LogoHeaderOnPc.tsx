import logo from '../../../assets/image/logoSchool.png'
import Navbar from 'react-bootstrap/Navbar'
import ConstRoutes from '../../../routes/ConstRoutes'
import styles from './LogoHeaderOnPc.module.scss'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function LogoHeaderOnPc() {
  return (
    <Navbar.Brand className={styles.logoHome} href={ConstRoutes.home}>
      <img src={logo} alt='hust' />
      <div className={styles.nameSchoolList}>
        <span className={cx('nameSchoolItem', 'nameSchoolVie')}>ĐẠI HỌC BÁCH KHOA HÀ NỘI</span>
        <span className={cx('nameSchoolItem', 'nameSchoolEng')}>HANOI UNIVERSITY OF SCIENCE AND TECHNOLOGY</span>
      </div>
    </Navbar.Brand>
  )
}

export default LogoHeaderOnPc
