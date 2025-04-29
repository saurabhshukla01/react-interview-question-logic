import React from 'react';

export default function App() {
  const names = ["Brian", "Paul", "Krug", "Halley"];
  const listItems = names.map((name) => <li key={name}>{name}</li>);
  return <ul>{listItems}</ul>;
}