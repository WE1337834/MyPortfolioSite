import React, { Component } from 'react'
import '../CSS/About.css'
export default class About extends Component {
	render() {
		return (
			<main>
				<section className='About'>
					<header className='About__header'>
						<h1 className='About__h1 lng-about'>Обо мне</h1>
					</header>
					<div className='About__info'>
						<div className='About__name_exp'>
							<p className='About__name lng-about_me'>
								Я Кузьма, мне 15 лет.
								<br />
								Начинающий Front-end разработчик. Увлекаюсь
								веб-программированием около года.
							</p>
						</div>

						<div className='About__lang'>
							<h2 className='About__h2 lng-languages_and_technologies'>
								Языки и технологии
							</h2>
							<ul className='About__list'>
								<li className='About__list_item lng-programming_languages'>
									Языки программирования: HTML, CSS, JavaScript, PHP
								</li>
								<li className='About__list_item lng-'>
									Технологии: MySQL, Git, AJAX, React, React-router
								</li>
							</ul>
						</div>
						<div className='About__contacts'>
							<h2 className='About__h2 lng-feedback'>Обратная связь</h2>
							<ul className='About__list'>
								<li className='About__list_item'>
									<a
										className='About__contact_info'
										href='https://t.me/WE1337WE'
										target='_blank'
										rel='noreferrer'
									>
										Telegram
									</a>
								</li>
								<li className='About__list_item'>
									<a
										className='About__contact_info'
										href='https://vk.com/we1337we'
										target='_blank'
										rel='noreferrer'
									>
										VK
									</a>
								</li>
							</ul>
						</div>

						<div className='About__media'>
							<h2 className='About__h2 lng-groups'>Мои группы</h2>
							<ul className='About__list'>
								<li className='About__list_item'>
									<a
										className='About__group_link'
										href='https://vk.com/path_we1337'
										target='_blank'
										rel='noreferrer'
									>
										VK
									</a>
								</li>
								<li className='About__list_item'>
									<a
										className='About__group_link'
										href='https://t.me/path_WE1337'
										target='_blank'
										rel='noreferrer'
									>
										Telegram
									</a>
								</li>
							</ul>
						</div>
						<div className='About__portfolio'>
							<h2 className='About__h2 lng-portfolio'>Мое портфолио</h2>
							<ul className='About__list'>
								<li className='About__list_item'>
									<a
										className='About__portfolio_link'
										href='https://github.com/WE1337834'
										target='_blank'
										rel='noreferrer'
									>
										Github
									</a>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</main>
		)
	}
}
