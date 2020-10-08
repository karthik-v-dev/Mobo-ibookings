import React from 'react';
import './website.css';
export default function Website() {
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-md-6 mb-6 text-white WEB'>
					<h1>
						Finally! A booking software that really works for my
						business
					</h1>
					<br />
					<p>
						Give your business the perfect tool to grow and become
						more efficient.ibooking is designed to make the Customer
						journey and the business process much more convenient,
						allowing you to focus on running the business.
					</p>
					<br />
					<button className='setting6 butts'>Learn more</button>
				</div>

				<div className='col-md-6 mb-6 WEB'>
					<img
						alt='website'
						src={require('./images/websiteimg11.png')}
						className='imgset'
					/>
				</div>
			</div>
		</div>
	);
}
