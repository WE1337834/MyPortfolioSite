import React, { Component } from 'react'

import '../CSS/Contacts.css'

import telegram from '../img/telegram.png'
import vk from '../img/vk.png'
import github from '../img/github.png'
import user from '../img/user.png'
import group from '../img/group.png'
export default class Contacts extends Component {
	render() {
		return (
			<main>
				<section className='Contacts'>
					<h1 className='Contacts__h1'>Контакты</h1>
					<div className='Contacts__contacts_info'>
						<div className='Contacts__contacts_link'>
							<h2 className='Contacts__h2'>
								<img src={user} alt='user' className='Contacts__h2_img' />
								<span className='Contacts__h2_text'>Личные</span>
							</h2>
							<nav className='Contacts__link'>
								<a
									className='Contents__contact'
									href='https://github.com/WE1337834'
								>
									<img
										src={github}
										alt='github--v1'
										className='Contents__contact_link'
									/>
								</a>
								<a className='Contents__contact' href='https://vk.com/we1337we'>
									<img
										src={vk}
										alt='vk-circled'
										className='Contents__contact_link'
									/>
								</a>
								<a className='Contents__contact' href='https://t.me/WE1337WE'>
									<img
										src={telegram}
										alt='telegram-app'
										className='Contents__contact_link'
									/>
								</a>
							</nav>
						</div>
						<div className='Contacts__contacts_link'>
							<h2 className='Contacts__h2'>
								<img
									src={group}
									alt='telegram-app'
									className='Contacts__h2_img'
								/>
								<span className='Contacts__h2_text'>Группы</span>
							</h2>
							<nav className='Contacts__link'>
								<a
									className='Contents__contact'
									href='https://vk.com/path_we1337'
								>
									<img
										src={vk}
										alt='vk-circled'
										className='Contents__contact_link'
									/>
								</a>
								<a
									className='Contents__contact'
									href='https://t.me/path_WE1337'
								>
									<img
										src={telegram}
										alt='telegram-app'
										className='Contents__contact_link'
									/>
								</a>
							</nav>
						</div>
					</div>
				</section>
			</main>
		)
	}
}
