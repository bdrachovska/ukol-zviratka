import React from 'react';
import './style.css';

const AnimalDetail = ({selectedAnimalId}) => {

	return (
<>
<div className="detail">
			<div className="detail__content">
				<div className="detail__header">
					<img className="detail__image" src={selectedAnimalId.foto} alt={selectedAnimalId.nazev} />
					<div className="detail__title">
						<h2 className="detail__name"><span>{selectedAnimalId.nazev}</span></h2>
						<div className="detail__latin"><span>{selectedAnimalId.nazevLatinsky}</span></div>
					</div>
				</div>

				<div className="detail__info">
					<p className="detail__desc">
						{selectedAnimalId.popis}
					</p>

					<div className="detail__items">
						<div className="detail__item">
							<h3>Domovina</h3>
							<p>{selectedAnimalId.domovina}</p>
						</div>
						<div className="detail__item">
							<h3>Biotop</h3>
							<p>{selectedAnimalId.biotop}</p>
						</div>
						<div className="detail__item">
							<h3>Potrava</h3>
							<p>{selectedAnimalId.potrava}</p>
						</div>
						<div className="detail__item">
							<h3>Velikost</h3>
							<p>{selectedAnimalId.velikost}</p>
						</div>
					</div>

					<div className="detail__zoo">
						<h3>Najdete v těchto ZOO</h3>
						<p>{selectedAnimalId.zoo}</p>
					</div>
				</div>

			</div>
		</div>
				</>
	)
};


export default AnimalDetail;