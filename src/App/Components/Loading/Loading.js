import React from 'react'
import styles from './Loading.scss'
import logo from '../../assets/images/logo.svg'

let Loading = () => {
  return (
    <div className={styles.loading}>
      <img src={logo} alt='Loading Logo' />
    </div>
  )
}

export default Loading
