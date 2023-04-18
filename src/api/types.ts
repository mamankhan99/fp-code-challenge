export type MetricsData = {
  data: Metrics[];
};

export type Metrics = {
  id: string;
  label: string;
  value: number;
  type: Type;
  description: string;
  category: Category;
};

export type Type = 'percentage' | 'number' | 'secs' | 'hours';

export type Category = 'efficiency' | 'shift' | 'downtime';
