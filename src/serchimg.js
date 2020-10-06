import React from 'react';
import './searchimg.css';
export default function Serchimg() {
	return (
		<div className='hight'>
			<div className='Search'>
				<div className='row'>
					<table
						class='table table-borderless '
						style={{ margin: ' 0px auto', textAlign: 'center' }}
					>
						<thead>
							<tr>
								<th>
									<form method='Post' className='bg-white'>
										<input
											type='text'
											className='form-control '
											placeholder='What would you like to book'
										/>

										<span className='  FqnKTc'>|</span>
										<input
											type='text'
											className='form-control '
											placeholder='Location'
										/>
										<span className='glyphicon glyphicon-screenshot  gly'></span>
										<span className='  FqnKTc'>|</span>

										<button className='but4'>Search</button>
									</form>
								</th>
							</tr>
						</thead>
					</table>
				</div>
			</div>
		</div>
	);
}
