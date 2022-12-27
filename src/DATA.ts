import bannerImg from './assets/images/banner.jpg'
import logoImg from './assets/images/header-logo.png'

export const DATA = {
  header: {
    menu: [
      {
        title: 'Главная',
        url: '/',
      },
      {
        title: 'Каталог',
        url: '/catalog',
      },
      {
        title: 'О магазине',
        url: '/about',
      },
      {
        title: 'Контакты',
        url: '/contacts',
      },
    ],
  },
  footer: {
    menu: [
      {
        title: 'О магазине',
        url: '/about',
      },
      {
        title: 'Каталог',
        url: '/catalog',
      },
      {
        title: 'Контакты',
        url: '/contacts',
      },
    ],
    pay_systems: [
      'footer-pay-systems-paypal',
      'footer-pay-systems-master-card',
      'footer-pay-systems-visa',
      'footer-pay-systems-yandex',
      'footer-pay-systems-webmoney',
      'footer-pay-systems-qiwi',
    ],
    copyright: `2009-2019 © BosaNoga.ru — модный интернет-магазин обуви и
    аксессуаров. Все права защищены.
    <br />
    Доставка по всей России!`,
  },
  contacts: {
    tel: '+7-495-790-35-03',
    working_time: 'с 09-00 до 21-00',
    mail: 'office@bosanoga.ru',
    social: ['footer-social-link-twitter', 'footer-social-link-vk'],
  },
  images: {
    logo: {
      url: logoImg,
      alt: 'Bosa Noga',
    },
    banner: {
      url: bannerImg,
      alt: 'К весне готовы!',
    },
  },
}
