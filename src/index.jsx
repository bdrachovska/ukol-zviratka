import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';

import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';

const App = () => {

  const [animals, setAnimals] = useState([]);
  const [selectedAnimalId, setSelectedAnimalId] = useState('')
  const selectAnimal = (id) => {
    setSelectedAnimalId(id)
  };
  

  useEffect(() => {
    fetch(`https://lrolecek.github.io/zviratka-api/zvirata.json`)
      .then((response) => response.json())
      .then((data) => {
      setAnimals(data.zvirata);
    }
      )
  }, []);


  return (
    <>
      <h1>Zvířátka v ZOO</h1>
      <div className="container">
        <AnimalList animalsList={animals} select={selectAnimal}/>
        <AnimalDetail selectedAnimal={selectedAnimalId}/>
      </div>
    </>
  );
}

render(<App />, document.querySelector('#app'));
