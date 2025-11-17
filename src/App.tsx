import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
      useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(import.meta.env.VITE_BACKEND_URL);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const result = await response.json();
          setData(result);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, []); // Empty dependency array ensures this runs once on mount
  return (
    <div className="App">
      <h1>FilesPlay Frontend</h1>
      {loading && <p>Loading data...</p>}
      {error && <p>Error fetching data: {error.message}</p>}
      {data && (
        <div>
          <h2>Data from Backend:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  )
}

export default App
