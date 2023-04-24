import styled from 'styled-components';

export const Table = styled.table`
  border-collapse: collapse;
  table-layout: fixed;
  border: 0.5px solid;
  background-color: aliceblue;
  color: black;
  width: 100%;
  border-radius: 5%;
`;

export const Thead = styled.thead`
  text-align: left;
  background-color: darkolivegreen;
  color: white;
  border-style: none;
`;

export const TH = styled.th`
  padding: 0.2rem;
`;

export const TData = styled.td`
  padding: 0.2rem;
  border: 0.5px solid;
  height: 3rem;
`;
