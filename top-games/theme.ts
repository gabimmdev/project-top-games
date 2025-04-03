import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#E90055FF',
    },
    secondary: {
      main: '#DCDCDCFF',
    },
  },
  typography: {  /*fonte para o conteúdo da tag typography */
    fontFamily: [ 
      '"Segoe UI"',
  ].join(','),
}
});

theme = responsiveFontSizes(theme); /* comando para fonte responsiva */

export default theme;