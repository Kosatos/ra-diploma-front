import React from 'react'
import { Link } from 'react-router-dom'
import { Menu } from '../../components/Menu'
import { DATA } from '../../DATA'

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
                <div className='header-controls-pics'>
                  <div
                    data-id='search-expander'
                    className='header-controls-pic header-controls-search'
                  ></div>
                  {/* <!-- Do programmatic navigation on click to /cart.html --> */}
                  <div className='header-controls-pic header-controls-cart'>
                    <div className='header-controls-cart-full'>1</div>
                    <div className='header-controls-cart-menu'></div>
                  </div>
                </div>
                <form
                  data-id='search-form'
                  className='header-controls-search-form form-inline invisible'
                >
                  <input className='form-control' placeholder='Поиск' />
                </form>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
