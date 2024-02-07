import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import logo from '../img/logo.png'
import Blog from '../pages/BlogPage'
import News from '../pages/News'
import About from '../pages/About' 
import Contacts from '../pages/Contacts' 

import '../CSS/Header.css'

class Header extends React.Component {
	render() {
		return (
			<>
				<header className='Header'>
					<a href='/'>
						<img src={logo} alt='Главная' className='Header__logo' />
					</a>

					<nav className='Header__nav'>
						<a href='/' className='Header__link'>
							Главная
						</a>
						<a href='/blog' className='Header__link'>
							Блог
						</a>
						<a href='/about' className='Header__link'>
							Обо мне
						</a>
						<a href='/contacts' className='Header__link'>
							Контакты
						</a>
					</nav>
				</header>
				<Router>
					<Routes>
						<Route exact path='/' element={<News />} />
						<Route exact path='/blog' element={<Blog />} />
						<Route exact path='/about' element={<About />} />
						<Route exact path='/contacts' element={<Contacts />} />
					</Routes>
				</Router>
			</>
		)
	}
}
export default Header
