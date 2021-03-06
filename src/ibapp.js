import React from 'react';
import './ibapp.css';
export default function Ibapp() {
	return (
		<div id='containers'>
			<div className='row'>
				<div className='col-md-6 mb-6 IB'>
					<img
						src={require('./images/Ibapp.png')}
						alt='IBAPP MOBILE SHOOTS'
					/>
				</div>

				<div className='col-md-6 mb-6 IB1'>
					<h2>Mobile apps coming soon!</h2>
					<p>
						Our team are working hard to develop awesome apps for
						our customers as well as our partner. The ibooking apps
						will be available in iOS and Andriod.
					</p>
					<p>
						<span>
							<button className='but3'>
								<div style={{ float: 'left' }}>
									<i class='fab fa-google-play'></i>
								</div>
								<div style={{ float: 'right' }}>
									<small
										style={{
											fontSize: '.7vw',
										}}
									>
										Get it on the Now
									</small>
									<br />
									<b style={{ fontSize: '1vw' }}>
										Google App
									</b>
								</div>
							</button>
						</span>
						<span>
							<button className='but3'>
								<div style={{ float: 'left' }}>
									<i class='fab fa-apple'></i>
								</div>
								<div style={{ float: 'right' }}>
									<small
										style={{
											fontSize: '.7vw',
										}}
									>
										Download on the{' '}
									</small>
									<br />
									<b style={{ fontSize: '1vw' }}>
										Play Store
									</b>
								</div>
							</button>
						</span>
					</p>
				</div>
			</div>
		</div>
	);
}
