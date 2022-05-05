import React, { useState } from 'react';

import Animal from '../Animal';

const AnimalList = ({animalsList, selectAnimal}) => {
   
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
               selectFn={selectAnimal}/>
               )}
</li>
</div>
</>
)
};


export default AnimalList;