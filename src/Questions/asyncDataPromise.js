import { useCallback, useEffect, useState } from "react";


// <App id={3}/>   pass id from props to one components to another components this is pass from index.js page 

function TestComponent({ id }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
      const json = await response.json();
      setPost(json);
    } catch (error) {
      console.error("Failed to fetch post:", error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (loading) return <div>Loading post...</div>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Post #{post.id}</h2>
      <p><strong>Title:</strong> {post.title}</p>
      <p><strong>Body:</strong> {post.body}</p>
    </div>
  );
}

export default TestComponent;
