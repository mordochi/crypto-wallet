export const ActionType = {
  ADD_COLLECTABLES: 'collectables/add',
  ADD_COLLECTABLE: 'collectable/add',
  UPDATE_IS_FETCH_ALL: 'isFetchAll/update',
};

export const actions = {
  addCollectables: (collectables, offset) => ({
    type: ActionType.ADD_COLLECTABLES,
    payload: { collectables, offset },
  }),
  addCollectable: (collectable) => ({
    type: ActionType.ADD_COLLECTABLE,
    payload: { collectable },
  }),
  updateIsFetchAll: (isFetchAll) => ({
    type: ActionType.UPDATE_IS_FETCH_ALL,
    payload: { isFetchAll },
  }),
};
