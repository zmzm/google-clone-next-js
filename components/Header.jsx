import React from 'react'
import PropTypes from 'prop-types'
import User from './User'

const Header = props => {
  return (
    <header className='flex justify-between p-5 text-sm text-gray-700'>
      <div className='header-link-container'>
        <p className='link'>About</p>
        <p className='link'>Store</p>
      </div>
      <div className='header-link-container'>
        <p className='link'>Gmail</p>
        <p className='link'>Images</p>
        <User />
      </div>
    </header>
  )
}

Header.propTypes = {}

export default Header