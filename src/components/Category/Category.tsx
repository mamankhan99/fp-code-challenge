import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import Dropdown from '../Dropdown';
import Statistics from '../Statistics';
import MetricsContext from '../../contexts';
import { Metrics } from '../../api/types';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

function Category() {
  const { data } = useContext(MetricsContext);

  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [filteredData, setFilteredData] = useState<Metrics[]>([]);

  useEffect(() => {
    if (data) {
      const metricsCategories = [
        ...new Set(data.map((metric) => metric.category)),
      ];
      setCategories(metricsCategories);
      setSelectedCategory(metricsCategories[0]);
    }
  }, [data]);

  useEffect(() => {
    if (data) {
      const filteredCategories = data.filter(
        (metric) => metric.category === selectedCategory
      );
      setFilteredData(filteredCategories);
    }
  }, [data, selectedCategory]);

  return (
    <Container>
      <div>
        <h4>Select Category: </h4>
        <Dropdown
          id="categories"
          options={categories}
          onChange={(category: string) => setSelectedCategory(category)}
        />
        <Statistics data={filteredData} />
      </div>
    </Container>
  );
}

export default Category;
