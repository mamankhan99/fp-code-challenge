import styled from 'styled-components';
import { Metrics } from './api/types';
import useFetch from './hooks/useFetch';
import Theme from './theme';

const DataWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: white;
`;

function App() {
  const { loading, error, data } = useFetch();
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
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
    </div>
  );
}

function WrappedApp() {
  return (
    <Theme>
      <App />;
    </Theme>
  );
}

export default WrappedApp;
