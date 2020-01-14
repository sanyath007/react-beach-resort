import React from 'react'
import { Link } from 'react-router-dom'

import Hero from '../components/Hero'
import Banner from '../components/Banner'

function Room(props) {
  return (
    <Hero hero="roomsHero">
      <Banner title="our rooms">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  )
}

export default Room
