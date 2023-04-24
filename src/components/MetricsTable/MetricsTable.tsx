import { Metrics } from '../../api/types';
import { TData, TH, Table, Thead } from './styles';

type TableProps = {
  data: Metrics[] | null;
};

function MetricsTable({ data }: TableProps) {
  return (
    <Table>
      <Thead>
        <tr>
          <TH>Id</TH>
          <TH>Label</TH>
          <TH>Value</TH>
          <TH>Type</TH>
          <TH>Description</TH>
          <TH>Category</TH>
        </tr>
      </Thead>
      <tbody>
        {data ? (
          data.map((metrics: Metrics) => (
            <tr key={metrics.id}>
              <TData>{metrics.id}</TData>
              <TData>{metrics.label}</TData>
              <TData>{metrics.value}</TData>
              <TData>{metrics.type}</TData>
              <TData>{metrics.description}</TData>
              <TData>{metrics.category}</TData>
            </tr>
          ))
        ) : (
          <tr>
            <TData colSpan={6}>No data</TData>
          </tr>
        )}
      </tbody>
    </Table>
  );
}

export default MetricsTable;
