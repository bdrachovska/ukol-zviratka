import React from 'react';

import Animal from '../Animal';

const AnimalList = ({zvire, select}) => {
   
	return (
<div className="animal-list">

            <li>
            onClick={()=> {select(zvire.id)}}
               <Animal  
               nazev={zvire.nazev}
               nazevLatinsky={zvire.nazevLatinsky} 
               foto={zvire.foto}/>
            </li>
</div>
)
};


export default AnimalList;