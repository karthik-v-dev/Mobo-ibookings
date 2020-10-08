import React from 'react';
import './system.css';
export default function System() {
	return (
		<div class='p-4 container'>
			<div class='row'>
				<div class='col-md-6 mb-6'>
					<h2>Simple, Powerful Booking System for Your Business</h2>
					<p class='mt-2 font-weight-normal'>
						{' '}
						ibooking is two-sided! So wheather you are a customer
						looking to book a service or a business looking for a
						great(cloud-based)booking.
					</p>
				</div>

				<div class='col-md-3 mb-3'>
					<h2 class='font-weight-bold'>2000+</h2>
					<p>Businesses use ibooking.</p>
					<h2>Nationwide</h2>
					<p>We cover all of UK</p>
				</div>
				<div class='col-md-3 mb-3'>
					<h2 class='font-weight-bold'>1.5M+</h2>
					<p>Customers have used ibooking.</p>
					<h2>It's FREE</h2>
					<p>All standard features are free</p>
				</div>
			</div>
		</div>
	);
}
