import { useContext } from 'react'
import styles from './NavigateBottomHeaderOnPc.module.scss'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { fixHeaderContext } from '../Header'

function NavigateBottomHeaderOnPc() {
  const fixHeader = useContext(fixHeaderContext)
  return (
    <div className={fixHeader ? styles.wrapperNavBottom : ''}>
      <ul className={styles.navBottomList}>
        <li>
          <Link className={styles.navBottomItem} to={'/d'}>
            GIỚI THIỆU
          </Link>
          <div className={styles.line}></div>
        </li>
        <li>
          <Link className={styles.navBottomItem} to={'/d'}>
            TIN TỨC
          </Link>
          <div className={styles.line}></div>
        </li>
        <li>
          <Link className={styles.navBottomItem} to={'/d'}>
            SỰ KIỆN NỔI BẬT
          </Link>
          <div className={styles.line}></div>
        </li>
        <li>
          <Link className={styles.navBottomItem} to={'/d'}>
            TUYỂN SINH
          </Link>
          <div className={styles.line}></div>
        </li>
        <li>
          <Link className={styles.navBottomItem} to={'/d'}>
            ĐÀO TẠO
          </Link>
          <div className={styles.line}></div>
        </li>
        <li>
          <Link className={styles.navBottomItem} to={'/d'}>
            SINH VIÊN
          </Link>
          <div className={styles.line}></div>
        </li>
        <li>
          <Link className={styles.navBottomItem} to={'/d'}>
            NGHIÊN CỨU
          </Link>
          <div className={styles.line}></div>
        </li>
        <li>
          <Link className={styles.navBottomItem} to={'/d'}>
            HỢP TÁC ĐỐI NGOẠI
          </Link>
          <div className={styles.line}></div>
        </li>
        <li>
          <Link className={styles.navBottomItem} to={'/d'}>
            eHUST
          </Link>
          <div className={styles.line}></div>
        </li>
      </ul>
    </div>
  )
}

export default NavigateBottomHeaderOnPc
