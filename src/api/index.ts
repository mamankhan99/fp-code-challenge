import data from './database';
import { MetricsData } from './types';

const getMetricsData = (): Promise<MetricsData> => {
  return Promise.resolve(data);
};

export default getMetricsData;
