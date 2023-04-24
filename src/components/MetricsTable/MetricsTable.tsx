import { useContext } from 'react';
import { Metrics } from '../../api/types';
import { TData, TH, Table, Thead, Trow } from './styles';
import { LabelContext } from '../../contexts';

type TableProps = {
  data: Metrics[] | null;
};

function MetricsTable({ data }: TableProps) {
  const { label } = useContext(LabelContext);
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
            <Trow key={metrics.id} isSelected={label === metrics.label}>
              <TData>{metrics.id}</TData>
              <TData>{metrics.label}</TData>
              <TData>{metrics.value}</TData>
              <TData>{metrics.type}</TData>
              <TData>{metrics.description}</TData>
              <TData>{metrics.category}</TData>
            </Trow>
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
