import React, { useState } from 'react';

import Animal from '../Animal';

const AnimalList = ({animalsList}) => {
   const [selectedAnimalId, setSelectedAnimalId] = useState('')
   const selectAnimal = (id) => {
     setSelectedAnimalId(id)
   };
   
	return (

<>
<div className="animal-list">
<li onClick={()=> {selectAnimal(onSelect(id))}}>
               {animalsList.map (animal =>
               <Animal
               key={animal.id}
               nazev={animal.nazev}
               nazevLatinsky={animal.nazevLatinsky} 
               foto={animal.foto}/>
               )}
</li>
</div>
</>
)
};


export default AnimalList;