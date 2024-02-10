import React from 'react'
import '../CSS/News.css'
import SideBar from '../Components/SideBar'

class News extends React.Component {
	render() {
		return (
			<main>
				<section className='News'>
					<div className='News__news'>
						<h1 className='News__news_title lng-news'>Новости</h1>
						<div className='News__news_site_and_my'>
							<div className='News__news_block'>
								<h2 className='News__news_site_title lng-site'>Сайта</h2>
								<div className='News__changes'>
									<ul className='News__list'>
										<li className='News__list_change change_left'>
											Добавил страницу "Контакты"
										</li>
									</ul>
								</div>
							</div>
							<div className='News__news_block'>
								<h2 className='News__news_me_title lng-me'>Мои</h2>
								<div className='News__changes'>
									<ul className='News__list'>
										<li className='News__list_change change_right'>
											Учу React
										</li>
										<li className='News__list_change change_right'>
											Поработал с react-router-dom
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				<SideBar />
			</main>
		)
	}
}
export default News
