import { makeStyles } from '@material-ui/styles';

const MARGIN = 16;

export const useStyles = makeStyles({
  root: {
    width: `calc(50% - ${MARGIN * 2}px)`,
    margin: MARGIN,
    border: '1px #6E6E6E solid',
    borderRadius: 4,
    padding: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    cursor: 'pointer',
    '&:hover': {
      boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.2)',
    },
    '@media screen and (max-width: 1024px)': {
      width: '100%',
    },
  },
  img: {
    width: '100%',
    height: 200,
    objectFit: 'contain',
  },
  name: {
    marginTop: 24,
    fontWeight: 500,
    textAlign: 'center',
  },
});
