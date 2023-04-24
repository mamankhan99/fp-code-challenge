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
          <h3>{metrics.label}</h3>
          <p>{`${metrics.value}${metrics.type === 'percentage' ? '%' : ''}`}</p>
        </StatsWrapper>
      ))}
    </Container>
  );
}

export default Statistics;
