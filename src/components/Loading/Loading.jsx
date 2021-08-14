import { useStyles } from './Loading.styles';

export const Loading = () => {
  const classes = useStyles();
  return <p className={classes.loading}>Loading...</p>;
};
