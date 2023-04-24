import { createContext } from 'react';

const LabelContext = createContext<LabelContextType>({
  label: '',
  setLabel: () => {},
});

type LabelContextType = {
  label: string;
  setLabel: (label: string) => void;
};

export default LabelContext;
