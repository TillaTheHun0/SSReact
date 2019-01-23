
import React from 'react'
import classNames from 'classnames'
import styles from './Content.scss'

let Content = props => {
  let { className, children } = props
  return <div className={classNames(styles.content, className)}>{children}</div>
}

export default Content
