import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import logo from '../img/logo.png'
import Blog from '../pages/BlogPage'
import News from '../pages/News'
import About from '../pages/About'
import Contacts from '../pages/Contacts'
import lang from '../lang'
import '../CSS/Header.css'

function Header() {
	useEffect(() => {
		const select = document.querySelector('select')
		const allLang = ['en', 'ru']

		select.addEventListener('change', changeURLLanguage)

		function changeURLLanguage() {
			let lang = select.value
			window.location.href = window.location.pathname + '#' + lang
			localStorage.setItem('selectedLanguage', lang) 
			window.location.reload()
			changeLanguage() 
		}

		function changeLanguage() {
			let hash = window.location.hash
			hash = hash.substring(1)
			console.log(hash)
			if (!allLang.includes(hash)) {
				window.location.href = window.location.pathname + '#ru'
				window.location.reload()
			}

			select.value = hash

			const selectedLanguage = localStorage.getItem('selectedLanguage')
			if (selectedLanguage) {
				select.value = selectedLanguage
				hash = selectedLanguage
			}

			for (let key in lang) {
				const elements = document.querySelectorAll('.lng-' + key)
				elements.forEach(element => {
					if (lang[key]) {
						element.innerHTML = lang[key][hash]
					}
				})
			}
		}
		changeLanguage() 
	}, [])

	return (
		<>
			<header className='Header'>
				<a href='/'>
					<img src={logo} alt='Главная' className='Header__logo' />
				</a>

				<nav className='Header__nav'>
					<a href='/' className='Header__link lng-home'>
						Главная
					</a>
					<a href='/blog' className='Header__link lng-blog'>
						Блог
					</a>
					<a href='/about' className='Header__link lng-about'>
						Обо мне
					</a>
					<a href='/contacts' className='Header__link lng-contacts'>
						Контакты
					</a>
				</nav>
				<select className='Header__lang' defaultValue='ru'>
					<option value='ru'>RU</option>
					<option value='en'>EN</option>
				</select>
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

export default Header
