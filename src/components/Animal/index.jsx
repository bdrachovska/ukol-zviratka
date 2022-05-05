import React from 'react';
import './style.css';

const Animal = ({foto, nazev, nazevLatinsky, id, selectFn}) => {

	return (
<>
<div className="animal" onClick={()=>{selectFn(id)}}>
				<div className="animal__image">
					<img src={foto} alt={nazev} />
				</div>
				<div className="animal__desc">
					<div className="animal__name">{nazev}</div>
					<div className="animal__latin">{nazevLatinsky}</div>
				</div>
			</div>
				</>
	)
};


export default Animal;