import { useEffect, useState } from 'react';
import { Metrics } from './api/types';
import getMetricsData from './api';

function App() {
  const [data, setData] = useState<Metrics[] | null>(null);

  useEffect(() => {
    async function fetchData() {
      const response = await getMetricsData();
      setData(response.data);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      <h1>Data</h1>
      {data &&
        data.map((item: Metrics) => (
          <div key={item.id}>
            <p>{item.label}</p>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <p>{item.type}</p>
            <p>{item.value}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
