import styled, { createGlobalStyle } from 'styled-components';
import { useMemo, useState } from 'react';
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  ArcElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import useFetch from './hooks/useFetch';
import Theme from './theme';
import MetricsTable from './components/MetricsTable';
import Category from './components/Category/Category';
import { MetricsContext, LabelContext } from './contexts';

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  ArcElement,
  Tooltip,
  Title,
  Legend
);

const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0 auto;
    padding: 0;
    min-height: 100%;
    box-sizing: border-box;
  }
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  background-color: aliceblue;
  font-family: ${(props) => props.theme.fontFamily};
`;

function App() {
  const [label, setLabel] = useState('');

  const handleLabelChange = (value: string) => {
    setLabel((prev: string) => (value === prev ? '' : value));
  };

  const { loading, error, data: metrics } = useFetch();

  const data = useMemo(
    () => ({
      data: metrics,
    }),
    [metrics]
  );

  return (
    <Root>
      <h2>FactoryPal Coding Challenge</h2>
      {data && (
        <LabelContext.Provider
          // eslint-disable-next-line react/jsx-no-constructed-context-values
          value={{
            label,
            setLabel: handleLabelChange,
          }}
        >
          <MetricsContext.Provider value={data}>
            <MetricsTable data={metrics} />
            <Category />
          </MetricsContext.Provider>
        </LabelContext.Provider>
      )}
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
    </Root>
  );
}

function WrappedApp() {
  return (
    <Theme>
      <GlobalStyles />
      <App />
    </Theme>
  );
}

export default WrappedApp;
