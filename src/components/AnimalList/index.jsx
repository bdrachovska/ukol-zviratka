import React, { useState } from 'react';

import Animal from '../Animal';

const AnimalList = ({animalsList, select}) => {

   
	return (

<>
<div className="animal-list">
<li>
               {animalsList.map (animal =>
               <Animal
               key={animal.id}
               nazev={animal.nazev}
               nazevLatinsky={animal.nazevLatinsky} 
               foto={animal.foto}
               onSelect={select}/>
               )}
</li>
</div>
</>
)
};


export default AnimalList;