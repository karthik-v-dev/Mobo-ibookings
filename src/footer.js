import React from 'react';
import './footer.css';
function Footer() {
	return (
		// <!-- footer content -->
		<div className='container-fluid'>
			<div class='p-4 ontainer' style={{ background: '#f3f3f3' }}>
				<div class='row'>
					<div class='col-md-5 mb-5'>
						<h6 class=''>About ibooking</h6>
						<p class='mt-2 font-weight-normal'>
							ibooking.co.uk is a cloud based booking management
							software which allows small business to manage their
							own bookings with convenience...
							<a herf='#' class='text-danger'>
								Read more
							</a>
						</p>
						<button
							class='btn btn-light px-4'
							style={{ background: 'white', color: 'black' }}
						>
							Business
						</button>
						<button
							class='btn btn-warning px-4'
							style={{ background: 'orangered', color: '#fff' }}
						>
							Customer
						</button>
					</div>
					{/* // <!----> */}
					<div class='col-md-2 mb-5'>
						<h5 class=' font-weight-bold'>Company</h5>

						{/* <!--unorder list--> */}
						<ul class='list-unstyled'>
							<li class='my-2'>
								<a href='#' class='text-dark'>
									Search Item
								</a>
							</li>
							<li class='my-2'>
								<a href='#' class='text-dark'>
									Pricing
								</a>
							</li>
							<li class='my-2'>
								<a href='#' class='text-dark'>
									Business Profile
								</a>
							</li>
							<li class='my-2'>
								<a href='#' class='text-dark'>
									Contact
								</a>
							</li>
						</ul>
					</div>
					{/* // <!-----> */}

					<div class='col-md-2 mb-4'>
						<h5 class='font-weight-bold'>Legal Stuff</h5>
						{/* <!--unorder list--> */}
						<ul class='list-unstyled'>
							<li class=' my-2'>
								<a href='#' class='text-dark'>
									Privacy policy
								</a>
							</li>
							<li class=' my-2'>
								<a href='#' class='text-dark'>
									Terms &amp; Conditions
								</a>
							</li>
							<li class=' my-2'>
								<a href='#' class='text-dark'>
									FAQ
								</a>
							</li>
						</ul>
					</div>
					{/* <!----> */}

					<div class='col-md-2 mb-4'>
						<h5 class='font-weight-bold'>Get in Touch</h5>
						<div>
							<div class='row'>
								<div class='col-md-2'>
									<a href='#'>
										<i
											class='fab fa-twitter text-dark mx-auto px-auto my-2'
											style={{
												fontSize: '20px',
												padding: '10px',
											}}
										></i>
									</a>
									<a href='#'>
										<i
											class='fab fa-instagram text-dark mx-auto px-auto my-2'
											style={{
												fontSize: '20px',
												padding: '10px',
											}}
										></i>
									</a>
								</div>
								<div class='col-md-2'>
									<a href='#'>
										<i
											class='fab fa-facebook-square text-dark mx-auto px-auto my-2'
											style={{
												fontSize: '20px',
												padding: '10px',
											}}
										></i>
									</a>
									<a href='#'>
										<i
											class='fab fa-twitter text-dark mx-auto px-auto my-2'
											style={{
												fontSize: '20px',
												padding: '10px',
											}}
										></i>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className='colrs'>
				<span className='bottomcopy'>
					&copy;2020,ibooking.co.uk. All rights reversed.
				</span>
				<span className='bottommobo'>
					Designed <b>MOBO</b>
				</span>
			</div>
		</div>
	);
}
export default Footer;
