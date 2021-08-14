import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    background: '#FFFFFF',
  },
  header: {
    width: '100%',
    height: 72,
    lineHeight: '72px',
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    '@media screen and (max-width: 425px)': {
      fontSize: 20,
    },
  },
  nav: {
    width: 72,
    height: 72,
    position: 'absolute',
    top: 0,
    left: 0,
    '@media screen and (max-width: 425px)': {
      width: 36,
    },
  },
  link: {
    width: 72,
    height: 72,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media screen and (max-width: 425px)': {
      width: 36,
    },
  },
  icon: {
    width: 48,
    height: 48,
    '@media screen and (max-width: 425px)': {
      width: 36,
      height: 36,
    },
  },
});
