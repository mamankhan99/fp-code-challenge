import { Metrics } from '../../api/types';
import { Container, StatsWrapper } from './styles';

type Props = {
  data: Metrics[];
};

function Statistics({ data }: Props) {
  return (
    <Container>
      <h3>Statistics</h3>
      {data.map((metrics: Metrics) => (
        <StatsWrapper key={metrics.id} isNegative={metrics.value < 0}>
          <h4>{metrics.label}:</h4>
          <p>{`${metrics.value}${metrics.type === 'percentage' ? '%' : ''}`}</p>
          {metrics.category !== 'efficiency' && <span>{metrics.type}</span>}
        </StatsWrapper>
      ))}
    </Container>
  );
}

export default Statistics;
