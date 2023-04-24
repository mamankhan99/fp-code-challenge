import { Pie, getElementAtEvent } from 'react-chartjs-2';

import { MouseEvent, useContext, useRef } from 'react';
import { InteractionItem } from 'chart.js';
import { Metrics } from '../../api/types';
import { normalizeDataSet } from '../../utils';
import { LabelContext } from '../../contexts';

type Props = {
  data: Metrics[];
};

function PieChart({ data }: Props) {
  const chartRef = useRef();

  const normalizedData = normalizeDataSet(data);

  const labels = normalizedData.map((item) => item.label);
  const values = normalizedData.map((item) => item.value);

  const { setLabel } = useContext(LabelContext);

  const chartData = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
        hoverBackgroundColor: ['#36A2EB', '#FFCE56', '#FF6384'],
      },
    ],
  };

  const onClick = (event: MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }

    const element = getElementAtEvent(chart, event) as InteractionItem[];

    if (!element.length) return;

    const { index } = element[0];

    setLabel(chartData.labels[index]);
  };

  return (
    <Pie
      ref={chartRef}
      data={chartData}
      onClick={onClick}
      options={{ responsive: true }}
    />
  );
}

export default PieChart;
