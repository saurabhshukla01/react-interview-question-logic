import React, { useState, useEffect } from "react";

function App() {
  // Mock Data (you can replace it with API call later)
  const mockData = Array.from({ length: 45 }, (_, i) => `Item ${i + 1}`);

  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // fixed number of items per page

  useEffect(() => {
    // simulate API fetch
    setItems(mockData);
  }, []);

  // Calculate indexes
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    if (currentPage < Math.ceil(items.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div style={{ width: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      <h2>Paginated List View</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {currentItems.map((item, index) => (
          <li key={index} style={{ padding: "10px 0", borderBottom: "1px solid #ccc" }}>
            {item}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "10px" }}>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>

        {/* Page numbers */}
        {[...Array(Math.ceil(items.length / itemsPerPage))].map((_, i) => (
          <button
            key={i}
            onClick={() => paginate(i + 1)}
            style={{
              backgroundColor: currentPage === i + 1 ? "#4CAF50" : "#f0f0f0",
              color: currentPage === i + 1 ? "#fff" : "#000",
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === Math.ceil(items.length / itemsPerPage)}
        >
          Next
        </button>
      </div>

      {/* Items per page info */}
      <p style={{ marginTop: "20px", textAlign: "center" }}>
        Showing {itemsPerPage} items per page
      </p>
    </div>
  );
}

export default App;
