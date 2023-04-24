import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  border-radius: 2%;
  padding: 1rem;
  margin: 1rem;
  width: 80%;
`;

export const StatsWrapper = styled.div<{ isNegative: boolean }>`
  color: ${({ isNegative, theme }) =>
    isNegative ? theme.color.red : theme.color.green};
`;
