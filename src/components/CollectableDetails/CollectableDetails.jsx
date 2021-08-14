import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { actions } from '../../actions';
import { getCollectable } from '../../selectors';
import { Header } from '../Header';
import { Loading } from '../Loading';
import { useStyles } from './CollectableDetails.styles';

/**
 * Collectable details
 * display the detail page of a specific collectable
 */
export const CollectableDetails = () => {
  const { assetContract, tokenId } = useParams();
  const collectable = useSelector((state) => getCollectable(state, tokenId));
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    // When we refresh in the details page, the corresponding collectable doesn't exist cuz we haven't fetched the collectable list.
    // Therefore, we need to fetch the current collectable.
    if (!collectable) {
      axios
        .get(`https://api.opensea.io/api/v1/asset/${assetContract}/${tokenId}`)
        .then(({ data }) => {
          dispatch(actions.addCollectable(data));
        })
        .catch((error) => console.error(error));
    }
  }, [assetContract, collectable, dispatch, tokenId]);

  if (!collectable) {
    return <Loading />;
  }

  const { imageUrl, name, collectionName, description, permalink } =
    collectable;

  return (
    <>
      <Header content={collectionName} showBackButton={true} />
      <div className={classes.content}>
        <div className={classes.imgContainer}>
          <img src={imageUrl} alt={name} className={classes.img} />
        </div>
        <p className={classes.name}>{name}</p>
        <p className={classes.description}>
          <span className={classes.topic}>Description: </span>
          {description ? (
            description
          ) : (
            <span className={classes.noDescription}>No description</span>
          )}
        </p>
      </div>
      <footer className={classes.footer}>
        <a
          href={permalink}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.link}
        >
          permalink
        </a>
      </footer>
    </>
  );
};
