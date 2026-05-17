import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem, addNoteToWishlistItem } from '../redux/WishList/actions';
import { getWishlistItems, getWishlistError, getIsItemInWishlist } from '../redux/selectors';
import { useCallback } from 'react';

export const useWishlist = () => {
  const dispatch = useDispatch();
  const items = useSelector(getWishlistItems);
  const error = useSelector(getWishlistError);

  const toggleWishlist = useCallback((item) => {
    const isInWishlist = items.some(i => i.id === item.id);
    if (isInWishlist) {
      dispatch(removeItem(item.id));
    } else {
      dispatch(addItem(item));
    }
  }, [items, dispatch]);

  const addToWishlist = useCallback((item) => {
    dispatch(addItem(item));
  }, [dispatch]);

  const removeFromWishlist = useCallback((itemId) => {
    dispatch(removeItem(itemId));
  }, [dispatch]);

  const addNote = useCallback((itemId, note) => {
    dispatch(addNoteToWishlistItem(itemId, note));
  }, [dispatch]);

  const isInWishlist = useCallback((itemId) => {
    return items.some(item => item.id === itemId);
  }, [items]);

  return {
    items,
    error,
    toggleWishlist,
    addToWishlist,
    removeFromWishlist,
    addNote,
    isInWishlist,
  };
};
