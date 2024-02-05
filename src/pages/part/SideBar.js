import React from 'react'
import '../../CSS/SideBar.css'
export default class SideBar extends React.Component {
	render() {
		return (
			<aside className='Side__Vk_Tg_group'>
				<div className='Side__group'>
					<div className='Side__info'>
						<h1 className='Side__title'>VK</h1>
						<img
							src='https://sun3-18.userapi.com/s/v1/ig2/7e_WY-11W18hyyw9FmlkQ6VMCc8zLZKGOuRhhqPlTZwbEit1oXgvjlwoQjmxyAnHKtNfO53PGkoibHrR6FoDzFJ7.jpg?size=100x100&quality=95&crop=135,0,520,520&ava=1'
							className='Side__img'
							alt=''
						/>
						<div className='Side__name_score_followers'>
							<a
								href='https://vk.com/path_we1337'
								className='Side__name'
								target='_blank'
								rel='noreferrer'
							>
								Мой путь в IT
							</a>
							<a
								href='https://vk.com/path_we1337'
								className='Side__score_followers'
								target='_blank'
								rel='noreferrer'
							>
								Подписчиков: 6
							</a>
						</div>
					</div>
				</div>
				<div className='Side__group'>
					<div className='Side__info'>
						<h1 className='Side__title'>Telegram</h1>
						<img
							src='https://sun3-18.userapi.com/s/v1/ig2/7e_WY-11W18hyyw9FmlkQ6VMCc8zLZKGOuRhhqPlTZwbEit1oXgvjlwoQjmxyAnHKtNfO53PGkoibHrR6FoDzFJ7.jpg?size=100x100&quality=95&crop=135,0,520,520&ava=1'
							className='Side__img'
							alt=''
						/>
						<div className='Side__name_score_followers'>
							<a
								href='https://t.me/path_WE1337'
								className='Side__name'
								target='_blank'
								rel='noreferrer'
							>
								Мой путь в IT
							</a>
							<a
								href='https://t.me/path_WE1337'
								className='Side__score_followers'
								target='_blank'
								rel='noreferrer'
							>
								Подписчиков: 2
							</a>
						</div>
					</div>
				</div>
			</aside>
		)
	}
}
