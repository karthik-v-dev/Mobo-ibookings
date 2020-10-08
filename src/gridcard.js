import React from 'react';
import './gridcard.css';
const Gridcard = (props) => {
	return (
		<div class='card-deck'>
			<div class='card'>
				<img
					src={props.imgUrl}
					className='setting3 card-img-top'
					alt='Avatar'
				/>
				<div class='card-body setting4'>
					<h3 class='card-title'>
						<b>{props.title}</b>
					</h3>

					<p class='card-text'>
						<span class='fa fa-star checked  fc'></span>
						<span class='fa fa-star checked  fc'></span>
						<span class='fa fa-star checked  fc'></span>
						<span class='fa fa-star checked  fc'></span>
						<span class='fa fa-star checked  fc'></span>
					</p>
					<p>{props.description}</p>
				</div>
			</div>
			<div class='card'>
				<img
					src={props.imgUrl}
					className='setting3 card-img-top'
					alt='Avatar'
				/>
				<div class='card-body setting4'>
					<h3 class='card-title'>
						<b>{props.title}</b>
					</h3>

					<p class='card-text'>
						<span class='fa fa-star checked  fc'></span>
						<span class='fa fa-star checked  fc'></span>
						<span class='fa fa-star checked  fc'></span>
						<span class='fa fa-star checked  fc'></span>
						<span class='fa fa-star checked  fc'></span>
					</p>
					<p>{props.description}</p>
				</div>
			</div>
			<div class='card'>
				<img
					src={props.imgUrl}
					className='setting3 card-img-top'
					alt='Avatar'
				/>
				<div class='card-body setting4'>
					<h3 class='card-title'>
						<b>{props.title}</b>
					</h3>

					<p class='card-text'>
						<span class='fa fa-star checked  fc'></span>
						<span class='fa fa-star checked  fc'></span>
						<span class='fa fa-star checked  fc'></span>
						<span class='fa fa-star checked  fc'></span>
						<span class='fa fa-star checked  fc'></span>
					</p>
					<p>{props.description}</p>
				</div>
			</div>
			<div class='card'>
				<img
					src={props.imgUrl}
					className='setting3 card-img-top'
					alt='Avatar'
				/>
				<div class='card-body setting4'>
					<h3 class='card-title'>
						<b>{props.title}</b>
					</h3>

					<p class='card-text'>
						<span class='fa fa-star checked  fc'></span>
						<span class='fa fa-star checked  fc'></span>
						<span class='fa fa-star checked  fc'></span>
						<span class='fa fa-star checked  fc'></span>
						<span class='fa fa-star checked  fc'></span>
					</p>
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	);
};
export default Gridcard;
