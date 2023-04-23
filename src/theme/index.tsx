import { ThemeProvider } from 'styled-components';

const theme = {
  color: {
    bright_green: '#9fe870',
    forest_green: '#163300',
    red: '#ff0000',
    green: '#003300',
  },
  fontFamily: 'Arial, Helvetica, sans-serif',
  font: {
    family: {
      primary: 'Arial',
      secondary: 'Verdana',
    },
    size: {
      small: '12px',
      medium: '16px',
      large: '24px',
    },
    weight: {
      light: 300,
      regular: 400,
      bold: 700,
    },
  },
};

type Props = {
  children: React.ReactNode;
};

function Theme({ children }: Props) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Theme;
