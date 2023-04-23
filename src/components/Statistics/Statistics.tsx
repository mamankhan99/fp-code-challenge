import styled from 'styled-components';
import { Metrics } from '../../api/types';

type Props = {
  data: Metrics[];
};

const StatsWrapper = styled.div<{ isNegative: boolean }>`
  color: ${({ isNegative, theme }) =>
    isNegative ? theme.color.red : theme.color.green};
`;

function Statistics({ data }: Props) {
  return (
    <div>
      <h1>Statistics</h1>
      {data.map((metrics: Metrics) => (
        <StatsWrapper key={metrics.id} isNegative={metrics.value < 0}>
          <h3>{metrics.label}</h3>
          <p>{`${metrics.value}${metrics.type === 'percentage' ? '%' : ''}`}</p>
        </StatsWrapper>
      ))}
    </div>
  );
}

export default Statistics;
