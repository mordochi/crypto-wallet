import { serializeCollectable } from './utils';
import { ActionType } from './actions';

const defaultState = {
  offset: 0,
  isFetchAll: false,
  collectableTokenIds: [],
  collectables: {},
};

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case ActionType.ADD_COLLECTABLES: {
      const { collectables, offset } = action.payload;
      for (const collectable of collectables) {
        const serailizedCollectable = serializeCollectable(collectable);
        state.collectableTokenIds = [
          ...state.collectableTokenIds,
          serailizedCollectable.tokenId,
        ];
        state.collectables = {
          ...state.collectables,
          [serailizedCollectable.tokenId]: serializeCollectable(collectable),
        };
      }
      state.offset = offset;
      return state;
    }
    case ActionType.ADD_COLLECTABLE: {
      const { collectable } = action.payload;
      const serailizedCollectable = serializeCollectable(collectable);
      state.collectables = {
        ...state.collectables,
        [serailizedCollectable.tokenId]: serializeCollectable(collectable),
      };
      return state;
    }
    case ActionType.UPDATE_IS_FETCH_ALL: {
      state.isFetchAll = action.payload.isFetchAll;
      return state;
    }
    default:
      return state;
  }
}
