import { Metrics } from '../api/types';
import { NormalizeValue } from './types';

export const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  return String(error);
};

const normalizeEfficiency = (metrices: Metrics[]): NormalizeValue[] => {
  let totalValue = 0;
  let totalPercentage = 0;

  metrices.forEach((metric) => {
    if (metric.type === 'percentage') {
      totalPercentage += metric.value;
    } else totalValue += Math.abs(metric.value);
  });

  const remainingPercentage = 100 - totalPercentage * 100;

  const total = (totalValue * 100) / remainingPercentage;

  return metrices.map((metric) => ({
    label: metric.label,
    value:
      metric.type === 'number'
        ? Math.abs(metric.value / total) * 100
        : metric.value * 100,
    id: metric.id,
  }));
};

const normalizeTime = (metrices: Metrics[]): NormalizeValue[] => {
  return metrices.map((metric) => {
    const { label, value, id, type } = metric;
    const newValue = type === 'hours' ? value * 60 * 60 : value;
    return {
      label,
      value: newValue,
      id,
    };
  });
};

export const normalizeDataSet = (data: Metrics[]): NormalizeValue[] => {
  if (data[0].category === 'efficiency') {
    return normalizeEfficiency(data);
  }
  return normalizeTime(data);
};
