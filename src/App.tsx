import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Metrics } from './api/types';
import getMetricsData from './api';

const DataWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;

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
          <DataWrapper key={item.id}>
            <p>{item.label}</p>
            <p>{item.category}</p>
            <p>{item.description}</p>
            <p>{item.type}</p>
            <p>{item.value}</p>
          </DataWrapper>
        ))}
    </div>
  );
}

export default App;
