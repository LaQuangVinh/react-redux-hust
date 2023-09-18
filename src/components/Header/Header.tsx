import Container from 'react-bootstrap/Container'

import styles from './Header.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useState, createContext } from 'react'
import classNames from 'classnames/bind'
import NavigateTopHeaderOnPc from './NavigateTopHeaderonPc/NavigateTopHeaderOnPc'
import NavigateBottomHeaderOnPc from './NavigateBottomHeaderOnPc/NavigateBottomHeaderOnPc'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store'
import { fixHeader, unFixHeader } from './Header.slice'
import NavigateTopHeaderOnMobile from './NavigateTopHeaderonMobile/NavigateTopHeaderOnMobile'

const cx = classNames.bind(styles)
export const fixHeaderContext = createContext<boolean>(false)

function Header() {
  const [activeSearch, setActiveSearch] = useState(false)
  const [animationSearch, setAnimationSearch] = useState(true)
  const dispatch = useDispatch()
  const isFixHeader = useSelector((state: RootState) => state.Header.isFixHeader)
  const widthDevice = window.screen.availWidth
  console.log(widthDevice)

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
          <div className={styles.contentHeaderTop}>
            <NavigateTopHeaderOnPc handleActiveInput={handleActiveInput} />
            <NavigateTopHeaderOnMobile handleActiveInput={handleActiveInput} />
            <NavigateBottomHeaderOnPc />
          </div>
        </div>

        {/* Navigate bên dưới */}
      </div>
    </fixHeaderContext.Provider>
  )
}

export default Header
