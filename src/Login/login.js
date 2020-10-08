import React from 'react';
import './login.css';
export default function Login() {
	return (
		// <!--header part End  -->

		// <!-- contact form -->

		// <!--Section: Contact v.2-->
		<section class=' pt-4 bg-light back  container-fluid'>
			{/* <!--Section heading--> */}

			{/* <!--Section description--> */}
			<h2 class='h1-responsive  my-4'>Contact ibooking</h2>
			<div class='row'>
				{/* <!--Grid column--> */}
				<div class='col-md-7 mb-md-0 mb-5'>
					<form
						id='contact-form'
						name='contact-form'
						action='mail.php'
						method='POST'
					>
						{/* <!--Grid row--> */}
						<div class='row'>
							{/* <!--Grid column--> */}
							<div class='col-md-6'>
								<div class='md-form mb-0'>
									<label for='firstname' class=''>
										Your First Name*
									</label>
									<input
										type='text'
										id='name'
										name='name'
										placeholder='Enter your firstname'
										class='form-control'
									/>
								</div>
							</div>
							{/* <!--Grid column--> */}

							{/* <!--Grid column--> */}
							<div class='col-md-6 mb-4'>
								<div class='md-form mb-0'>
									<label for='lastname' class=''>
										Your Last Name*
									</label>
									<input
										type='text'
										id='lastname'
										name='lastname'
										placeholder='Enter your lastname'
										class='form-control'
									/>
								</div>
							</div>
							{/* <!--Grid column--> */}
						</div>
						{/* <!--Grid row--> */}

						{/* <!--Grid row--> */}
						<div class='row'>
							<div class='col-md-12 mb-4'>
								<div class='md-form mb-0'>
									<label for='email' class=''>
										Your Email*
									</label>
									<input
										type='text'
										id='email'
										name='email'
										placeholder='Enter your email'
										class='form-control'
									/>
								</div>
							</div>
						</div>
						{/* <!--Grid row--> */}

						{/* <!--Grid row--> */}
						<div class='row'>
							{/* <!--Grid column--> */}
							<div class='col-md-12 mb-4'>
								<div class='md-form'>
									<label for='message'>Your message</label>
									<textarea
										type='text'
										id='message'
										name='message'
										rows='6'
										placeholder='Enter Your Message'
										class='form-control md-textarea'
									></textarea>
								</div>
							</div>
						</div>
						{/* <!--Grid row--> */}
					</form>

					<div class='text-center text-md-left'>
						<a class='btn btn-dark'>Send message</a>
					</div>
					<div class='status'></div>
				</div>
				{/* <!--Grid column--> */}

				{/* <!--Grid column--> */}
				<div class='col-md-5'>
					<div class='mb-2'>
						<h6 class='mb-1'>General Equiries</h6>
						<p>
							We're here to help! The fastest way to get in touch
							with the ibooking team is via the online form.
							Please note that the we are not the booking
							provider.{' '}
						</p>
					</div>
					<div class='mb-2'>
						<h6 class='mb-1'>Customer Equiries</h6>
						<p class='mb-0'>
							If you already have a booking and need to get in
							touch with the supplier. Please login to your online
							account to view the bookings details and provider
							information.{' '}
						</p>
						<a href='#' class='text-danger'>
							-Customer Login
						</a>
					</div>
					<div class='mb-2'>
						<h6 class='mb-1'>Business Equiries</h6>
						<p class='mb-0'>
							If you are a business and would like to learn more
							about joining the ibooking platform.Please visit the
							our business support page to learn more.
						</p>
						<a href='#' class='text-danger'>
							-Business Login
						</a>
					</div>
				</div>
				{/* <!--Grid column--> */}
			</div>
		</section>
		// <!--Section: Contact v.2-->

		// <!-- End contact form -->
	);
}
