import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '../../components/Menu'
import { DATA } from '../../DATA'

import HeaderControls from '../../components/HeaderControls'
import SearchFormHeader from '../../components/SearchFormHeader'

const Header: React.FC = (): JSX.Element => {
  const { header, images } = DATA
  return (
    <header className='container'>
      <div className='row'>
        <div className='col'>
          <nav className='navbar navbar-expand-sm navbar-light bg-light'>
            <Link className='navbar-brand' to='/'>
              <img src={images.logo.url} alt={images.logo.alt} />
            </Link>

            <div className='collapase navbar-collapse' id='navbarMain'>
              <Menu items={header.menu} classes='navbar-nav mr-auto' />
              <div>
                <HeaderControls />
                <SearchFormHeader />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
