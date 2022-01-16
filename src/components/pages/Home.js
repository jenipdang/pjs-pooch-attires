import { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { model } from '../data/data';
import { Nav } from 'react-bootstrap';
import '../css/Home.css'

const Home = () => {
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const lastIndex = model.length - 1;
		if (index < 0) {
			setIndex(lastIndex);
		}
		if (index > lastIndex) {
			setIndex(0);
		}
	}, [index]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(index + 1);
		}, 3000);
		return () => clearInterval(slider);
	}, [index]);

	return (
		<section className="section">
			<div></div>
			<div className="title">
				<h2>
					<span>/</span>READY FOR ANY OCCASIONS!
				</h2>
				<Nav.Link href="/products">SHOP NOW</Nav.Link>
				<div className='underline'></div>
			</div>
			<div className="section-center">
				{model.map((model, modelIndex) => {
					const { id, image, name, title, amount } = model;

					let position = 'nextSlide';

					if (modelIndex === index) {
						position = 'activeSlide';
					}

					if (
						modelIndex === index - 1 ||
						(index === 0 && modelIndex === model.length - 1)
					) {
						position = 'lastSlide';
					}

					return (
						<article className={position} key={id}>
							<img src={image} alt={name} className="person-img" />
							<h4>{name}</h4>
							<p className="title">{title}</p>
							<p className="text">${amount}</p>
							<FaQuoteRight className="icon" />
						</article>
					);
				})}
				<button className="prev" onClick={() => setIndex(index - 1)}>
					<FiChevronLeft />
				</button>
				<button className="next" onClick={() => setIndex(index + 1)}>
					<FiChevronRight />
				</button>
			</div>
		</section>
	);
};

export default Home;
