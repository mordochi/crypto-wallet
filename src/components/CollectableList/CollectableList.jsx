import axios from 'axios';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../actions';
import {
  getCollectableTokenIds,
  getIsFetchAll,
  getOffset,
} from '../../selectors';
import { Header } from '../Header';
import { Loading } from '../Loading';
import { Collectable } from './Collectable';
import { useStyles } from './CollectableList.styles';

const LIMIT = 20;

/**
 * Collectable list
 * Display the list of all the collectables we have and fetch for new ones when we scroll to the bottom
 */
export const CollectableList = () => {
  const lastCollectable = useRef(null);
  const isFetching = useRef(false);
  const isFetchAll = useSelector(getIsFetchAll);
  const offset = useSelector(getOffset);
  const collectableTokenIds = useSelector(getCollectableTokenIds);
  const classes = useStyles();
  const dispatch = useDispatch();

  const fetch = useCallback(() => {
    if (isFetching.current || isFetchAll) {
      // Don't fetch the list again when we're already fetching or we have already fetched all the collectables the list has.
      return;
    }
    isFetching.current = true;
    axios
      .get('https://api.opensea.io/api/v1/assets', {
        params: {
          format: 'json',
          owner: '0x960DE9907A2e2f5363646d48D7FB675Cd2892e91',
          offset,
          limit: LIMIT,
        },
      })
      .then(({ data }) => {
        isFetching.current = false;
        const { assets } = data;
        if (!assets.length) {
          dispatch(actions.updateIsFetchAll(true));
          return;
        }
        dispatch(actions.addCollectables(assets, offset + LIMIT));
      })
      .catch((error) => console.error(error));
  }, [dispatch, isFetchAll, offset]);

  useEffect(() => {
    // Fetch the collectable list when we just arrive the list page
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(function (entries) {
      const { isIntersecting } = entries[0];
      if (isIntersecting) {
        // Fetch the next {LIMIT} collectables when we reach the bottom of the page.
        fetch();
      }
    });

    if (lastCollectable.current && !isFetchAll) {
      // Observing whether the last item has been scrolled into view
      intersectionObserver.observe(lastCollectable.current);
    }

    return () => {
      intersectionObserver.disconnect();
    };
  }, [collectableTokenIds.length, fetch, isFetchAll]);

  return (
    <>
      <Header content="Crypto Collectable Wallet" />
      <div className={classes.list}>
        {collectableTokenIds.map((tokenId, index) => {
          return (
            <Collectable
              key={tokenId}
              ref={(node) => {
                if (node && index === collectableTokenIds.length - 1) {
                  lastCollectable.current = node;
                }
              }}
              tokenId={tokenId}
            />
          );
        })}
      </div>
      {!isFetchAll && <Loading />}
    </>
  );
};
