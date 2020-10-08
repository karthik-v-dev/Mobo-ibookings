import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './planning.css';

export class Planing extends Component {
	render() {
		return (
			<div className='card-shadow'>
				<div>
					<OwlCarousel
						items={5}
						className='owl-theme'
						loop
						nav
						margin={10}
					>
						<div className='img-wrapper col-md-15  '>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
								alt='test'
							/>
							<div class='containers mb-1'>
								<h5>Business name</h5>
							</div>
						</div>
						<div className='img-wrapper col-md-15 mb-md-0 mb-5'>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
								alt='test'
							/>
							<div class='containers mb-1 '>
								<h5>Business name</h5>
							</div>
						</div>
						<div className='img-wrapper col-md-15 mb-md-0 mb-5'>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
								alt='test'
							/>
							<div class='containers mb-1'>
								<h5>Business name</h5>
							</div>
						</div>
						<div className='img-wrapper col-md-15 mb-md-0 mb-5'>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
								alt='test'
							/>
							<div class='containers mb-1 '>
								<h5>Business name</h5>
							</div>
						</div>
						<div className='img-wrapper col-md-15 mb-md-0 mb-5'>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
								alt='test'
							/>
							<div class='containers mb-1 '>
								<h5>Business name</h5>
							</div>
						</div>
						<div className='img-wrapper col-md-15 mb-md-0 mb-5'>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
								alt='test'
							/>
							<div class='containers mb-1 '>
								<h5>Business name</h5>
							</div>
						</div>
						<div className='img-wrapper col-md-15 mb-md-0 mb-5 '>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
								alt='test'
							/>
							<div class='containers mb-1 '>
								<h5>Business name</h5>
							</div>
						</div>
						<div className='img-wrapper col-md-15 mb-5'>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
								alt='test'
							/>
							<div class='containers mb-1'>
								<h5>Business name</h5>
							</div>
						</div>
						<div className='img-wrapper col-md-15 mb-md-0 mb-5'>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
								alt='test'
							/>
							<div class='containers mb-1 '>
								<h5>Business name</h5>
							</div>
						</div>
						<div className='img-wrapper col-md-15 mb-md-0 mb-5 '>
							<img
								className='img inner-img'
								src={require('./images/img10.jpg')}
								alt='test'
							/>
							<div class='containers mb-1 '>
								<h5>Business name</h5>
							</div>
						</div>
					</OwlCarousel>
				</div>
			</div>
		);
	}
}

export default Planing;
