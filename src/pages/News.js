import React from 'react'
import '../CSS/News.css'
import SideBar from '../Components/SideBar'
import school from '../img/school.png'
import simple from '../img/simple.png'

class News extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			slide: 0,
			image: [school, simple],
			url: [
				'https://landing-school.netlify.app',
				'https://simple-landingpagewe.netlify.app',
			],
		}
	}

	slide = item => {
		let slide = this.state.slide
		if (slide >= 0) {
			if (item < 0) {
				slide -= 1
			}
			if (item > 0) {
				slide += 1
			}
		}
		if (slide < 0) {
			slide = 0
		}
		if (slide === this.state.image.length) {
			slide = this.state.image.length - 1
		}
		this.setState({ slide: slide })
	}

	render() {
		const { slide, image, url } = this.state

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
											Добавил слайдер-портфолио
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
									</ul>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className='Portfolio'>
					<div className='Portfolio__block'>
						<h1 className='Portfolio__title lng-portfolio'>Мое портфолио</h1>
						<div className='Portfolio__content'>
							<div className='Portfolio__slider'>
								<div className='Portfolio_button'>
									<button
										className='Portfolio__btn lng-back'
										onClick={() => this.slide(-1)}
									>
										Назад
									</button>
									<button
										className='Portfolio__btn lng-next'
										onClick={() => this.slide(+1)}
									>
										Вперед
									</button>
								</div>
								<div className='Portfolio__slide'>
									<a
										className='Portfolio__slide_item_link_sm'
										href={url[slide - 1]}
										target='_blank'
										rel='noreferrer'
									>
										{slide > 0 && (
											<img
												alt=''
												src={image[slide - 1]}
												className='Portfolio__slide_item_sm'
											/>
										)}
									</a>

									<a
										className='Portfolio__slide_item_link_mn'
										href={url[slide]}
										target='_blank'
										rel='noreferrer'
									>
										<img
											alt={slide}
											src={image[slide]}
											className='Portfolio__slide_item_mn'
										/>
									</a>

									<a
										className='Portfolio__slide_item_link_sm'
										href={url[slide + 1]}
										target='_blank'
										rel='noreferrer'
									>
										{slide < image.length - 1 && (
											<img
												alt=''
												src={image[slide + 1]}
												className='Portfolio__slide_item_sm'
											/>
										)}
									</a>
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
