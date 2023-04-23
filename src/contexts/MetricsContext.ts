import { createContext } from 'react';
import { Metrics } from '../api/types';

const MetricsContext = createContext<MetricsContextType>({ data: null });

type MetricsContextType = {
  data: Metrics[] | null;
};

export default MetricsContext;
