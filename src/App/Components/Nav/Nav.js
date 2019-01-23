import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Nav.scss'
import logo from '../../assets/images/logo.svg'

let Nav = props => {
  let { lang } = props

  return (
    <div className={styles.navigation}>
      <Link to={`/${lang}`} className={styles.logo}>
        <img src={logo} alt='Logo' />
        <span>SSReact Boilerplate</span>
      </Link>
    </div>
  )
}

export default Nav
