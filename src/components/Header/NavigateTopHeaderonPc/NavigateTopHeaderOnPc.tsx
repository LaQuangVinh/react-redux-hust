import styles from './NavigateTopHeaderOnPc.module.scss'
import LogoHeaderOnPc from '../LogoHeaderOnPc/LogoHeaderOnPc'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import { NavLink } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar'
import classNames from 'classnames/bind'

const cx = classNames.bind(styles)

function NavigateTopHeaderOnPc() {
  return (
    <Navbar expand='lg' className={styles.wrapperNav}>
      <Container className={styles.containerNav}>
        <LogoHeaderOnPc />
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
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigateTopHeaderOnPc
