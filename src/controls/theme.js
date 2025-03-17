import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: 'var(--background-color)',
          color: 'var(--light-color)',
          fontSize: '13px',
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--primary-color)', 
          },
        },
        icon: {
            color: 'var(--light-color)', 
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
              borderColor: 'var(--primary-color)', 
            },
          },
      },
    },
    MuiMenu: {
        styleOverrides: {
          paper: {
            backgroundColor: 'var(--dark-color)', 
          },
        },
      },
    MuiMenuItem: {
      styleOverrides: {
        root: {
            backgroundColor: 'var(--dark-color)',
            color: 'var(--light-color)',
            fontSize: '13px', 
            '&.Mui-selected': {
              backgroundColor: 'var(--dark-color-hover)', 
              color: 'var(--light-color)', 
            },
            '&.Mui-selected:hover': {
              backgroundColor: 'var(--dark-color-hover)', 
              color: 'var(--light-color)', 
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