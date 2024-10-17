import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: 'var(--background-color)',
          color: 'var(--light-color)',
          fontSize: '13px', // Dimensione del font del selettore
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--primary-color)', // Colore del bordo quando il selettore è focalizzato
          },
        },
        icon: {
            color: 'var(--light-color)', // Colore della freccia del selettore
          },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: 'var(--background-color)',
          '&:hover': {
            borderColor: 'var(--background-color)',
          },
          '&.Mui-focused': {
            borderColor: 'var(--primary-color)',
          },
        },
        root: {
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: 'var(--primary-color)', // Colore del bordo quando il selettore è focalizzato
            },
          },
      },
    },
    MuiMenu: {
        styleOverrides: {
          paper: {
            backgroundColor: 'var(--dark-color)', // Colore di sfondo del menu
          },
        },
      },
    MuiMenuItem: {
      styleOverrides: {
        root: {
            backgroundColor: 'var(--dark-color)',
            color: 'var(--light-color)',
            fontSize: '13px', // Dimensione del font degli elementi del menu
            '&.Mui-selected': {
              backgroundColor: 'var(--dark-color-hover)', // Colore di sfondo per l'elemento selezionato
              color: 'var(--light-color)', // Colore del testo per l'elemento selezionato
            },
            '&.Mui-selected:hover': {
              backgroundColor: 'var(--dark-color-hover)', // Colore di sfondo per l'elemento selezionato al passaggio del mouse
              color: 'var(--light-color)', // Colore del testo per l'elemento selezionato al passaggio del mouse
            },
            '&:hover': {
              backgroundColor: 'var(--dark-color-hover)',
              color: 'var(--light-color)',
            },
          },
      },
    },
  },
});

export default theme;