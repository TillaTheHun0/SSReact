
import React from 'react'
import { Route, Redirect } from 'react-router'

const RedirectWithStatus = props => {
  let { from, to, status } = props

  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.status = status
        }
        return <Redirect from={from} to={to} />
      }}
    />
  )
}

export default RedirectWithStatus
