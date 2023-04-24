import styled, { createGlobalStyle } from 'styled-components';
import { useMemo } from 'react';
import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  ArcElement,
  LinearScale,
  Title,
  Tooltip,
} from 'chart.js';
import useFetch from './hooks/useFetch';
import Theme from './theme';
import MetricsTable from './components/MetricsTable';
import Category from './components/Category/Category';
import MetricsContext from './contexts';

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  ArcElement,
  Tooltip,
  Title
);

const Heading = styled.div`
  font-family: ${(props) => props.theme.font.family.primary};
`;

const GlobalStyles = createGlobalStyle`
  html,
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  font-family: ${(props) => props.theme.fontFamily};
`;

function App() {
  const { loading, error, data: metrics } = useFetch();

  const data = useMemo(
    () => ({
      data: metrics,
    }),
    [metrics]
  );

  return (
    <Root>
      <Heading>Metrics</Heading>
      {data && (
        <MetricsContext.Provider value={data}>
          <MetricsTable data={metrics} />
          <Category />
        </MetricsContext.Provider>
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
