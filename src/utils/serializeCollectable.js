/**
 * Only keep the fields we care from the fetched collectable
 */
export const serializeCollectable = (collectable) => {
  const {
    image_url,
    name,
    collection: { name: collectionName },
    description,
    permalink,
    asset_contract: { address },
    token_id,
  } = collectable;
  return {
    imageUrl: image_url,
    name,
    collectionName: collectionName,
    description,
    permalink,
    assetContract: address,
    tokenId: token_id,
  };
};
