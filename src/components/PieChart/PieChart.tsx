import { Pie, getElementAtEvent } from 'react-chartjs-2';

import { MouseEvent, useRef } from 'react';
import { InteractionItem } from 'chart.js';
import { Metrics } from '../../api/types';
import { normalizeDataSet } from '../../utils';

type Props = {
  data: Metrics[];
};

function PieChart({ data }: Props) {
  const chartRef = useRef();

  const normalizedData = normalizeDataSet(data);

  const labels = normalizedData.map((item) => item.label);
  const values = normalizedData.map((item) => item.value);

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

    const { datasetIndex, index } = element[0];

    console.log(
      chartData.labels[index],
      chartData.datasets[datasetIndex].data[index]
    );
    // printElementsAtEvent(getElementsAtEvent(chart, event));
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
