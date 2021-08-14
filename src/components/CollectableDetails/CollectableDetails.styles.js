import { makeStyles } from '@material-ui/styles';

export const useStyles = makeStyles({
  content: {
    maxWidth: 800,
    padding: '0 24px 24px',
    margin: '72px auto 144px',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
  },
  imgContainer: {
    width: '100%',
    border: '1px #e5e8eb solid',
    borderRadius: 4,
    padding: 16,
  },
  img: {
    width: '100%',
  },
  name: {
    margin: '24px 0',
    fontSize: 18,
    fontWeight: 600,
    textAlign: 'center',
  },
  description: {
    lineHeight: 1.5,
  },
  topic: {
    fontWeight: 'bold',
  },
  noDescription: {
    color: '#9c9c9c',
    fontStyle: 'italic',
  },
  footer: {
    width: '100%',
    height: 72,
    padding: 16,
    background: '#FFFFFF',
    boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.2)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    bottom: 0,
  },
  link: {
    width: '50%',
    maxWidth: 300,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 16,
    color: '#FFFFFF',
    textDecoration: 'none',
    background: 'teal',
    borderRadius: 4,
  },
});
