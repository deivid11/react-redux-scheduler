import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
      {/*
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/counter' activeClassName='route--active'>
      Counter
    </Link>
      {' · '}
      */}
    <Link to='/scheduler' activeClassName='route--active'>
        Scheduler
    </Link>
  </div>
)

export default Header
