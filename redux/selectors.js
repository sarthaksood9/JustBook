export const getWishlistItems = (state) => state.wishlist.items;
export const getWishlistError = (state) => state.wishlist.error;

export const getRecentItems = (state) => state.recentVisit.items;
export const getRecentError = (state) => state.recentVisit.error;

export const getSelectedProduct = (state) => state.product.item;

export const getIsItemInWishlist = (state, itemId) => {
  return state.wishlist.items.some(item => item.id === itemId);
};

export const getIsItemInRecent = (state, itemId) => {
  return state.recentVisit.items.some(item => item.id === itemId);
};
