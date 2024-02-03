import React from 'react'
import logo from '../img/logo.png'
import '../CSS/Header.css'

class Header extends React.Component {
	render() {
		return (
			<header className='Header'>
				<a href='/'>
					<img src={logo} alt='Главная' className='Header__logo' />
				</a>

				<nav className='Header__nav'>
					<a href='/' className='Header__link'>Главная</a>
					<a href='/' className='Header__link'>Блог</a>
					<a href='/' className='Header__link'>Обо мне</a>
					<a href='/' className='Header__link'>Контакты</a>
				</nav>
				
			</header>
		)
	}
}
export default Header
