import { Component } from 'react'
import group from '../img/MyGroup.jpg'
import SideBar from '../Components/SideBar'
import '../CSS/BlogPage.css'

export default class Blog extends Component {
	render() {
		return (
			<main>
				<section className='Post'>
					<header className='Post__header'>
						<img src={group} className='Post_header_img' alt='' />
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
						<img
							alt=''
							className='Post__message_img'
							src='https://sun3-24.userapi.com/impg/l-8tYXUMLcOduNFoKPnU9-b7RECYquoyKiXp4A/dTo_h3G8m5A.jpg?size=1866x922&quality=96&sign=ff13ec6112f8e48102eccce8259264cd&type=album'
						/>
					</div>
				</section>

				<SideBar />
			</main>
		)
	}
}
