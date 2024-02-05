import React from 'react'
import '../CSS/News.css'
import SideBar from './part/SideBar'

class News extends React.Component {
	render() {
		return (
			<main>
				<div className='News'>
					<div className='News__news'>
						<h1 className='News__news_title'>Новости</h1>
						<div className='News__news_site_and_my'>
							<div className='News__news_block'>
								<h2 className='News__news_site_title'>Сайта</h2>
								<div className='News__changes_site'>
									<ul className='News__list'>
										<li className='News__list_change'>
											Сделан начальный интерфейс страницы "Блог"
										</li>
										<li className='News__list_change'>
											Добавлена боковая панель
										</li>
									</ul>
								</div>
							</div>
							<div className='News__news_block'>
								<h2 className='News__news_me_title'>Мои</h2>
								<div className='News__changes_me'>
									<ul className='News__list'>
										<li className='News__list_change'>Учу React</li>
										<li className='News__list_change'>
											Поработал с react-router-dom
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<SideBar />
			</main>
		)
	}
}
export default News
