import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  border: 0.5px solid;
  background-color: aliceblue;
  box-shadow: 0 0 0.5rem 0.5rem rgba(0, 0, 0, 0.1);
  color: black;
  width: 100%;
`;

export const Thead = styled.thead`
  text-align: left;
  background-color: darkolivegreen;
  color: white;
  border-style: none;
`;

export const TH = styled.th`
  padding: 0.1rem;
`;

export const TData = styled.td`
  padding: 0.1rem;
  border: 0.5px solid;
  height: 3rem;
`;

export const Trow = styled.tr<{ isSelected: boolean }>`
  background-color: ${({ isSelected }) => (isSelected ? 'pink' : 'aliceblue')};
`;
