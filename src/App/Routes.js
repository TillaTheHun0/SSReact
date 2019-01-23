
import React from 'react'
import universal from 'react-universal-component'
import { Route, Switch } from 'react-router'
import './assets/css/globals.scss'
import riangle from './assets/images/riangle.svg'

import Head from './Components/Head'
import Loading from './Components/Loading'
import RedirectWithStatus from './Components/RedirectStatus'
import Nav from './Components/Nav'

const UniversalComponent = universal(props => import(`./Views/${props.page}`), {
  loading: () => <Loading />,
  ignoreBabelRename: true
})

const Routes = props => {
  let { staticContext, lang } = props // eslint-disable-line

  return (
    <div>
      <Head />
      <Nav lang={lang} />
      <Switch>
        <Route
          exact
          path='/:lang'
          render={routeProps => <UniversalComponent page='Home' {...routeProps} />}
        />
        // More routes here
        <RedirectWithStatus status={301} exact from='/' to={`/${lang}`} />
        <Route render={routeProps => <UniversalComponent page='NotFound' {...routeProps} />} />
      </Switch>
      <footer>
        <a href='https://www.riangle.com/'>
          <img src={riangle} alt='Riangle Logo' />
        </a>
      </footer>
    </div>
  )
}

export default Routes
