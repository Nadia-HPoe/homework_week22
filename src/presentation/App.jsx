import React from 'react';
import { Hero } from './Hero';
import { heroes } from './heroes_info';

function App() {
  const heroesList = heroes.map((hero) => (
    <Hero
      key={hero.id}
      name={hero.name}
      universe={hero.universe}
      alterego={hero.alterego}
      occupation={hero.occupation}
      friends={hero.friends}
      superpowers={hero.superpowers}
      url={hero.url}
    />
  ));
  return <div>{heroesList}</div>;
}

export { App };
