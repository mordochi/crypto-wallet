import PropTypes from 'prop-types';
import { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCollectable } from '../../../selectors';
import { useStyles } from './Collectable.styles';

/**
 * Collectable
 * Display the basic information linked to the detail page of the current collectable
 * @param {Object} props
 * @property {string} props.tokenId - Token id of the current collectable
 */
export const Collectable = forwardRef((props, ref) => {
  const { tokenId } = props;
  const collectable = useSelector((state) => getCollectable(state, tokenId));
  const classes = useStyles();

  const { imageUrl, name, assetContract } = collectable;
  return (
    <Link
      to={`/collectable/${assetContract}/${tokenId}`}
      className={classes.root}
      ref={ref}
    >
      <img src={imageUrl} alt={name} className={classes.img} />
      <p className={classes.name}>{name}</p>
    </Link>
  );
});

Collectable.propTypes = {
  tokenId: PropTypes.string.isRequired,
};

Collectable.defaultProps = {
  showBackButton: false,
};
