
import React from 'react'
import Head from '../../Components/Head'
import styles from './Home.scss'
import { t } from '../../Components/Languages'

let Home = props => {
  const { match } = props
  const { lang } = match.params
  return (
    <div>
      <Head title='React SSR Boilerplate • Home' />
      <div className={styles.intro}>
        <h1 className={styles.title}>React Boilerplate</h1>
        <p className={styles.desc}>{t(lang, 'language.title')}</p>
      </div>
    </div>
  )
}

export default Home
