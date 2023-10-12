import React from 'react';

function Hero(props) {
  return (
    <div className="hero-card">
      <div className="hero-name">{props.name}</div>
      <div className="hero-universe">{props.universe}</div>
      <div className="hero-alterego">{props.alterego}</div>
    </div>
  );
}
export { Hero };
