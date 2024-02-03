import React from 'react'
import '../CSS/Main.css'

class Main extends React.Component {
	render() {
		return (
			<main>
				<div className='Main'>
					<div className='Main__news'>
						<h1 className='Main__news_title'>Новости</h1>
						<div className='Main__news_site_and_my'>
							<div className='Main__news_block'>
								<h2 className='Main__news_site_title'>Сайта</h2>
								<div className='Main__changes_site'>
									<ul className='Main__list'>
										<li className='Main__list_change'>
											Разработка главной страницы
										</li>
									</ul>
								</div>
							</div>
							<div className='Main__news_block'>
								<h2 className='Main__news_me_title'>Мои</h2>
								<div className='Main__changes_me'>
									<ul className='Main__list'>
										<li className='Main__list_change'>Учу React</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		)
	}
}
export default Main
