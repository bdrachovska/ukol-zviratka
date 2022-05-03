import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';
import './style.css';

import AnimalList from './components/AnimalList';
import AnimalDetail from './components/AnimalDetail';

const App = () => {

  const [animal, setAnimal] = useState('')

  useEffect(() => {
    fetch(`https://lrolecek.github.io/zviratka-api/zvirata.json`)
      .then((response) => response.json())
      .then((data) => setAnimal(data.zvirata));
  }, []);

  return (
    <>
      <h1>Zvířátka v ZOO</h1>

      <div className="container">
        <AnimalList/>
        <AnimalDetail/>
      </div>
    </>
  );
}

render(<App />, document.querySelector('#app'));
