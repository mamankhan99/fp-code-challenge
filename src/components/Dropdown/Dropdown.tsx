import { Select } from './styles';

type Props = {
  id: string;
  options: string[];
  onChange: (category: string) => void;
};

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
