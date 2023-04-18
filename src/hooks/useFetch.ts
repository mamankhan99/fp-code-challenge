import { useEffect, useState } from 'react';
import getMetricsData from '../api';
import { Metrics } from '../api/types';
import { getErrorMessage } from '../utils';

const useFetch = () => {
  const [data, setData] = useState<Metrics[] | null>(null);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await getMetricsData();
      setData(response.data);
    }

    try {
      fetchData();
    } catch (err) {
      setError(getErrorMessage(err));
    } finally {
      setLoading(false);
    }
  }, []);

  return { data, error, loading };
};

export default useFetch;
