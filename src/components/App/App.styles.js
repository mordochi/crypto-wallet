import { makeStyles } from '@material-ui/styles';

// Reset the global style
export const useStyles = makeStyles({
  '@global': {
    '*': {
      boxSizing: 'border-box',
      margin: 0,
    },
    body: {
      margin: 0,
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
      color: '#111111',
    },
    p: {
      fontSize: '16px',
    },
    a: {
      textDecoration: 'none',
      color: '#111111',
    },
  },
});
