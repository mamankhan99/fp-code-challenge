/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Select = styled.select`
  width: 30%;
  height: 2rem;
  background: white;
  color: gray;
  padding-left: 0.3125rem;
  font-size: 0.875rem;
  border: 0.5px solid;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 1.25rem;
    padding: 0rem 0.125rem 0.0625rem;
  }
`;
