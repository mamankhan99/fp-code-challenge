import { Metrics } from '../../api/types';
import { Table, Thead } from './styles';

type TableProps = {
  data: Metrics[] | null;
};

function MetricsTable({ data }: TableProps) {
  return (
    <Table>
      <Thead>
        <tr>
          <th>Id</th>
          <th>Label</th>
          <th>Value</th>
          <th>Type</th>
          <th>Description</th>
          <th>Category</th>
        </tr>
      </Thead>
      <tbody>
        {data ? (
          data.map((metrics: Metrics) => (
            <tr key={metrics.id}>
              <td>{metrics.id}</td>
              <td>{metrics.label}</td>
              <td>{metrics.value}</td>
              <td>{metrics.type}</td>
              <td>{metrics.description}</td>
              <td>{metrics.category}</td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={6}>No data</td>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default MetricsTable;
