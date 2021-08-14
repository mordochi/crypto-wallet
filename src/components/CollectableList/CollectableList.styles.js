import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  header: {
    height: 72,
    lineHeight: '72px',
    textAlign: 'center',
  },
  list: {
    width: '80%',
    margin: '72px auto',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    '@media screen and (max-width: 1024px)': {
      width: '90%',
    },
  },
});
