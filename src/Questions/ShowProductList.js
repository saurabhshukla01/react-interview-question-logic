import React, { useEffect, useState } from 'react';

export default function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setList(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []); // Empty dependency array means this effect runs once when the component mounts

  console.log(list);

  // Display the list of product names or any data you want from the list
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {list.map((product) => (
          <li key={product.id}>{product.title}</li> // Assuming products have a title field
        ))}
      </ul>
    </div>
  );
}