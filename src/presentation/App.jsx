import React from 'react';
import { heroesList } from './heroes.json';
import { Hero } from './Hero';

function App() {
  const heroes = JSON.parse(heroesList);
  return (
    <div className="App">
      {heroes.map((hero) => (
        <li key={hero.id}>
          <Hero
            name={hero.name}
            universe={hero.universe}
            alterego={hero.alterego}
          ></Hero>
        </li>
      ))}
    </div>
  );
}

export { App };
