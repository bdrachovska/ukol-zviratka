import React, { useState } from 'react';

import Animal from '../Animal';

const AnimalList = ({animals, select}) => {
   
	return (

<>
<div className="animal-list">
               {animals.map ((animal) => (
               <ul onClick={()=>{select(animal)}}>
               <Animal
               key={animal.id}
               nazev={animal.nazev}
               nazevLatinsky={animal.nazevLatinsky} 
               foto={animal.foto}/>
               </ul>
               ))}
</div>
</>
)
};


export default AnimalList;