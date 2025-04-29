import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("https://dummy-websocket-server.io"); // Replace with actual websocket server

function Dashboard() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [websocketData, setWebsocketData] = useState(null);

  // Fetch data from REST APIs
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsRes, usersRes] = await Promise.all([
          fetch("https://jsonplaceholder.typicode.com/posts"),
          fetch("https://jsonplaceholder.typicode.com/users")
        ]);

        const postsData = await postsRes.json();
        const usersData = await usersRes.json();

        setPosts(postsData.slice(0, 5)); // Just show 5 items for demo
        setUsers(usersData.slice(0, 5));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // WebSocket connection for real-time updates
  useEffect(() => {
    socket.on("update", (data) => {
      setWebsocketData(data);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>📊 Real-Time Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >
        <div style={{ background: "#f0f0f0", padding: "15px", borderRadius: "10px" }}>
          <h3>📰 Latest Posts</h3>
          {posts.map((post) => (
            <div key={post.id} style={{ marginBottom: "10px" }}>
              <strong>{post.title}</strong>
              <p style={{ fontSize: "14px" }}>{post.body}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#e0f7fa", padding: "15px", borderRadius: "10px" }}>
          <h3>👥 Active Users</h3>
          {users.map((user) => (
            <div key={user.id}>
              <strong>{user.name}</strong>
              <p style={{ fontSize: "14px" }}>{user.email}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "#fce4ec", padding: "15px", borderRadius: "10px" }}>
          <h3>🔄 WebSocket Feed</h3>
          {websocketData ? (
            <pre>{JSON.stringify(websocketData, null, 2)}</pre>
          ) : (
            <p>Waiting for live updates...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
