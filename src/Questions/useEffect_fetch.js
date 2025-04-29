import React, { useEffect, useState } from "react";

function MyComponent() {
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        // Example using JSONPlaceholder API
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div style={{ padding: "20px" }}>
      <h2>Posts</h2>
      {data.map((post) => (
        <div key={post.id} style={{ marginBottom: "15px" }}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default MyComponent;
