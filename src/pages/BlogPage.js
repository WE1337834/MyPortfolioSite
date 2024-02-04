import { Component } from 'react'
import group from '../img/MyGroup.jpg'
import post from '../img/post/240203.jpg'

import '../CSS/BlogPage.css'

export default class Blog extends Component {
	
	render() {
		return (
			<main>
				<article className='Post'>
					<header className='Post__header'>
						<img src={group} className='Post_header_img' />
						<div className='Post__header_name_date'>
							<p className='Post__header_nameGroup'>Мой путь в IT</p>
							<time className='Post__date' dateTime='2024-02-03T22:45'>
								2024-02-03 22:45
							</time>
						</div>
					</header>
					<div className='Post__message'>
						Извиняюсь за столь долгое отсутствие. Исходный код с последней
						работы пропал по техническим причинам, поэтому я перестал делать тот
						сайт. Но я начал делать сайт, который я буду сам разрабатывать с
						полного нуля(без дизайна и без готовых работ). Надеюсь вам
						понравится 😁
						<a
							className='Post__link'
							href='https://github.com/WE1337834/MyPortfolioSite'
						>
							Код
						</a>
						<a className='Post__link' href='https://t.me/path_WE1337'>
							Telegram-канал
						</a>
						<a className='Post__link' href='https://vk.com/path_we1337'>
							VK-группа
						</a>
						<img className='Post__message_img' src={post} />
					</div>
				</article>
			</main>
		)
	}
}
