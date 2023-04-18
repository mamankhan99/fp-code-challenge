import { ThemeProvider } from 'styled-components';

const theme = {
  dark: {
    background: '#000',
    text: '#fff',
  },
  light: {
    background: '#fff',
    text: '#000',
  },
};

type Props = {
  children: React.ReactNode;
};

function Theme({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
