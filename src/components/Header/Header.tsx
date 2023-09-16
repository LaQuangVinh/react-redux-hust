import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'
import logo from '../../assets/image/logoSchool.png'
import { NavLink } from 'react-router-dom'
import ConstRoutes from '../../routes/ConstRoutes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const cx = classNames.bind(styles)

function Header() {
  const [activeSearch, setActiveSearch] = useState(false)
  const [animationSearch, setAnimationSearch] = useState(true)
  const handleActiveInput = () => {
    if (!activeSearch) {
      setActiveSearch(true)
    } else {
      setAnimationSearch(false)
    }
  }

  const handleAnimationEnd = () => {
    if (!animationSearch) {
      setAnimationSearch(true)
      setActiveSearch(false)
    }
  }
  return (
    <div>
      {activeSearch && (
        <div
          className={cx('inputSearchWrapper', `${animationSearch ? 'mountInputAnimation' : 'unmountInputAnimation'}`)}
          onAnimationEnd={handleAnimationEnd}
        >
          <Container className={styles.containerSearch}>
            <h4 className={styles.headingSearch}>Nhập từ khóa tìm kiếm</h4>
            <div className={styles.wrapperInputAndBtn}>
              <input className={styles.inputSearch} type='text' placeholder='Tìm...' />
              <span className={styles.btnSearchResult}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </span>
            </div>
          </Container>
        </div>
      )}
      <Navbar expand='lg' className={styles.wrapper}>
        <Container className={styles.container}>
          <Navbar.Brand className={styles.logoHome} href={ConstRoutes.home}>
            <img src={logo} alt='hust' />
            <div className={styles.nameSchoolList}>
              <span className={cx('nameSchoolItem', 'nameSchoolVie')}>ĐẠI HỌC BÁCH KHOA HÀ NỘI</span>
              <span className={cx('nameSchoolItem', 'nameSchoolEng')}>HANOI UNIVERSITY OF SCIENCE AND TECHNOLOGY</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className={`${cx('navList')} me-auto`}>
              <NavLink className={styles.navItem} to='/s'>
                Tuyển dụng
              </NavLink>
              <NavLink className={styles.navItem} to='/s'>
                Dự án SAHEP
              </NavLink>
              <NavLink className={styles.navItem} to='/s'>
                Email
              </NavLink>
              <NavLink className={styles.navItem} to='/s'>
                Lịch công tác
              </NavLink>
              <NavLink className={styles.navItem} to='/s'>
                Liên hệ
              </NavLink>
              <div className={styles.iconAndSearchWrapper}>
                <span onClick={handleActiveInput} className={styles.btnSearch}>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </span>
                <div className={styles.flagWrapper}>
                  <NavLink to='/s'>
                    <img
                      className={styles.iconFlag}
                      src='https://hust.edu.vn/themes/hust/images/language/en.png'
                      alt='eng'
                    />
                  </NavLink>
                  <NavLink to='/s'>
                    <img
                      className={styles.iconFlag}
                      src='https://hust.edu.vn/themes/hust/images/language/vi.png'
                      alt='eng'
                    />
                  </NavLink>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
