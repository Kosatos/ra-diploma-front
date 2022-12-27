import React from 'react'
import { Menu } from '../../components/Menu'
import Pay from '../../components/Pay'
import Copyright from '../../components/Copyright'
import Social from '../../components/Social'

import { DATA } from '../../DATA'

const Footer: React.FC = (): JSX.Element => {
  const { footer, contacts } = DATA
  return (
    <footer className='container bg-light footer'>
      <div className='row'>
        <div className='col'>
          <section>
            <h5>Информация</h5>
            <Menu items={footer.menu} classes='nav flex-column' />
          </section>
        </div>
        <div className='col'>
          <section>
            <h5>Принимаем к оплате:</h5>
            <Pay items={footer.pay_systems} />
          </section>
          <section>
            <Copyright text={footer.copyright} />
          </section>
        </div>
        <div className='col text-end'>
          <section className='footer-contacts'>
            <h5>Контакты:</h5>
            <a className='footer-contacts-phone' href={'tel:' + contacts.tel}>
              {contacts.tel.replaceAll('-', ' ')}
            </a>
            <span className='footer-contacts-working-hours'>
              Ежедневно: {contacts.working_time}
            </span>
            <a
              className='footer-contacts-email'
              href={'mailto:' + contacts.mail}
            >
              {contacts.mail}
            </a>
            <Social items={contacts.social} />
          </section>
        </div>
      </div>
    </footer>
  )
}

export default Footer
