// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

import ThemeProvider from 'react-toolbox/lib/ThemeProvider'
import theme from './src/toolbox/theme'

import Nav from '../Nav'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
       <div>
         <Nav className="nav-container" />
         <div>Home Page!</div>
        </div>
     </ThemeProvider>,
    document.body.appendChild(document.createElement('div')),
  )
})
