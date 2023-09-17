import { useContext } from 'react'
import styles from './NavigateBottomHeaderOnPc.module.scss'
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'
import { fixHeaderContext } from '../Header'

function NavigateBottomHeaderOnPc() {
  const fixHeader = useContext(fixHeaderContext)
  return (
    <div className={fixHeader ? styles.wrapperNavBottom : ''}>
      <Container className={styles.containerNavBottom}>
        <ul className={styles.navBottomList}>
          <li>
            <Link className={styles.navBottomItem} to={'/d'}>
              GIỚI THIỆU
            </Link>
          </li>
          <li>
            <Link className={styles.navBottomItem} to={'/d'}>
              TIN TỨC
            </Link>
          </li>
          <li>
            <Link className={styles.navBottomItem} to={'/d'}>
              SỰ KIỆN NỔI BẬT
            </Link>
          </li>
          <li>
            <Link className={styles.navBottomItem} to={'/d'}>
              TUYỂN SINH
            </Link>
          </li>
          <li>
            <Link className={styles.navBottomItem} to={'/d'}>
              ĐÀO TẠO
            </Link>
          </li>
          <li>
            <Link className={styles.navBottomItem} to={'/d'}>
              SINH VIÊN
            </Link>
          </li>
          <li>
            <Link className={styles.navBottomItem} to={'/d'}>
              NGHIÊN CỨU
            </Link>
          </li>
          <li>
            <Link className={styles.navBottomItem} to={'/d'}>
              HỢP TÁC ĐỐI NGOẠI
            </Link>
          </li>
          <li>
            <Link className={styles.navBottomItem} to={'/d'}>
              eHUST
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  )
}

export default NavigateBottomHeaderOnPc
