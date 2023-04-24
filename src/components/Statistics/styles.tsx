import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
  padding: 1rem;
  margin: 1rem;
  width: 80%;
`;

export const StatsWrapper = styled.div<{ isNegative: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${({ isNegative, theme }) =>
    isNegative ? theme.color.red : theme.color.green};
`;
