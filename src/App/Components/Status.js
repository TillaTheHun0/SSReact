
import React from 'react'
import { Route } from 'react-router'

export const Status = ({ code }) => {
  return (
    <Route
      render={({ staticContext }) => {
        if (staticContext) {
          staticContext.status = code
        }
        return null
      }}
    />
  )
}
