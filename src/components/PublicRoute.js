import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import local from '../utils/local'

const PublicRoute = props => {
  const { component: Component, ...rest } = props
  const render = props =>
    local.getToken() ? (
      <Redirect to='/' />
    ) : (
      <Component {...rest} {...props} />
    )
  return <Route {...rest} render={render} />
}

PublicRoute.propTypes = {
  component: PropTypes.func,
}

export default PublicRoute