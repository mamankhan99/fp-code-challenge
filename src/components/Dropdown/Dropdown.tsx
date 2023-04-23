import styled from 'styled-components';

type Props = {
  id: string;
  options: string[];
  onChange: (category: string) => void;
};

const Select = styled.select`
  width: 100%;
  height: 2rem;
  background: white;
  color: gray;
  padding-left: 0.3125rem;
  font-size: 0.875rem;
  border: none;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 1.25rem;
    padding: 0rem 0.125rem 0.0625rem;
  }
`;

function Dropdown({ id, options, onChange }: Props) {
  return (
    <Select id={id} onChange={(event) => onChange(event.target.value)}>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
}

export default Dropdown;
