import Container from 'react-bootstrap/Container'

import styles from './Header.module.scss'

import { NavLink } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState, createContext } from 'react'
import classNames from 'classnames/bind'
import NavigateTopHeaderOnPc from './NavigateTopHeaderonPc/NavigateTopHeaderOnPc'
import NavigateBottomHeaderOnPc from './NavigateBottomHeaderOnPc/NavigateBottomHeaderOnPc'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { fixHeader, unFixHeader } from './Header.slice'

const cx = classNames.bind(styles)
export const fixHeaderContext = createContext<boolean>(false)

function Header() {
  const [activeSearch, setActiveSearch] = useState(false)
  const [animationSearch, setAnimationSearch] = useState(true)
  const dispatch = useDispatch()
  const isFixHeader = useSelector((state: RootState) => state.FixHeader.isFixHeader)

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

  document.addEventListener('scroll', () => {
    if (window.scrollY > 231) {
      dispatch(fixHeader(true))
    } else if (window.scrollY < 160) {
      dispatch(unFixHeader(false))
    }
  })

  return (
    <fixHeaderContext.Provider value={isFixHeader}>
      <div className={isFixHeader ? styles.wrapper : ''}>
        {/* Ẩn hiện thanh search */}
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

        {/* Navigate */}
        <div className={styles.wrapperHeaderTop}>
          <Container className={styles.container}>
            <NavigateTopHeaderOnPc />

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
          </Container>
        </div>

        {/* Navigate bên dưới */}
        <NavigateBottomHeaderOnPc />
      </div>
    </fixHeaderContext.Provider>
  )
}

export default Header
