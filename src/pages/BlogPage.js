import { Component } from 'react'
import group from '../img/MyGroup.jpg'
import SideBar from '../Components/SideBar'
import '../CSS/BlogPage.css'

export default class Blog extends Component {
	render() {
		return (
			<main>
				<section className='Post'>
					<div className='Post__block'>
						<header className='Post__header'>
							<img src={group} className='Post_header_img' alt='' />
							<div className='Post__header_name_date'>
								<p className='Post__header_nameGroup lng-path'>Мой путь в IT</p>
								<time className='Post__date' dateTime='2024-02-09T20:02'>
									2024-02-09 20:02
								</time>
							</div>
						</header>
						<div className='Post__message'>
							Добавил страницу "Контакты"
							<a
								className='Post__link'
								href='https://github.com/WE1337834/MyPortfolioSite'
							>
								Code
							</a>
							<a className='Post__link' href='https://t.me/path_WE1337'>
								Telegram
							</a>
							<a className='Post__link' href='https://vk.com/path_we1337'>
								VK
							</a>
							<img
								alt=''
								className='Post__message_img'
								src='https://sun9-2.userapi.com/impg/NgIVi8fifuHvy95un3nedgxV3tjB3-kDzrMTQA/bTjjEES9bLE.jpg?size=1866x922&quality=96&sign=75427a4a51064778189fcd4a1576bd8e&type=album'
							/>
						</div>
					</div>
					<div className='Post__block'>
						<header className='Post__header'>
							<img src={group} className='Post_header_img' alt='' />
							<div className='Post__header_name_date'>
								<p className='Post__header_nameGroup lng-path'>Мой путь в IT</p>
								<time className='Post__date' dateTime='2024-02-07T19:34'>
									2024-02-07 19:34
								</time>
							</div>
						</header>
						<div className='Post__message'>
							Добавил страницу "Обо мне"
							<a
								className='Post__link'
								href='https://github.com/WE1337834/MyPortfolioSite'
							>
								Code
							</a>
							<a className='Post__link' href='https://t.me/path_WE1337'>
								Telegram
							</a>
							<a className='Post__link' href='https://vk.com/path_we1337'>
								VK
							</a>
							<img
								alt=''
								className='Post__message_img'
								src='https://sun9-18.userapi.com/impg/XqC4nre7EN8FLhEieI1zykIiUOkXJL9RvIkxKg/aOX5ICXoB0I.jpg?size=1866x922&quality=96&sign=b0020892208d66c18074ac4819751a88&type=album'
							/>
						</div>
					</div>
					<div className='Post__block'>
						<header className='Post__header'>
							<img src={group} className='Post_header_img' alt='' />
							<div className='Post__header_name_date'>
								<p className='Post__header_nameGroup lng-path'>Мой путь в IT</p>
								<time className='Post__date' dateTime='2024-02-05T19:30'>
									2024-02-05 19:30
								</time>
							</div>
						</header>
						<div className='Post__message'>
							Добавил немного контента на сайт, можете зайти и оценить😁
							<a
								className='Post__link'
								href='https://github.com/WE1337834/MyPortfolioSite'
							>
								Code
							</a>
							<a className='Post__link' href='https://t.me/path_WE1337'>
								Telegram
							</a>
							<a className='Post__link' href='https://vk.com/path_we1337'>
								VK
							</a>
							<img
								alt=''
								className='Post__message_img'
								src='https://sun9-18.userapi.com/impg/Ad51l_l2VIBwXjcH0AVmTb98qapYhpnZ7EhQPw/1Si-fP-OsDw.jpg?size=1866x922&quality=96&sign=aec2fbd4e71ca8090d96fca1968f975b&type=album'
							/>
						</div>
					</div>
					<div className='Post__block'>
						<header className='Post__header'>
							<img src={group} className='Post_header_img' alt='' />
							<div className='Post__header_name_date'>
								<p className='Post__header_nameGroup lng-path'>Мой путь в IT</p>
								<time className='Post__date' dateTime='2024-02-03T22:45'>
									2024-02-03 22:45
								</time>
							</div>
						</header>
						<div className='Post__message'>
							Извиняюсь за столь долгое отсутствие. Исходный Code с последней
							работы пропал по техническим причинам, поэтому я перестал делать
							тот сайт. Но я начал делать сайт, который я буду сам разрабатывать
							с полного нуля(без дизайна и без готовых работ). Надеюсь вам
							понравится 😁
							<a
								className='Post__link'
								href='https://github.com/WE1337834/MyPortfolioSite'
							>
								Code
							</a>
							<a className='Post__link' href='https://t.me/path_WE1337'>
								Telegram
							</a>
							<a className='Post__link' href='https://vk.com/path_we1337'>
								VK
							</a>
							<img
								alt=''
								className='Post__message_img'
								src='https://sun3-24.userapi.com/impg/l-8tYXUMLcOduNFoKPnU9-b7RECYquoyKiXp4A/dTo_h3G8m5A.jpg?size=1866x922&quality=96&sign=ff13ec6112f8e48102eccce8259264cd&type=album'
							/>
						</div>
					</div>
				</section>

				<SideBar />
			</main>
		)
	}
}
