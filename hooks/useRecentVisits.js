import { useDispatch, useSelector } from 'react-redux';
import { addToRecentAsync } from '../redux/recentVisit/actions';
import { getRecentItems, getRecentError, getIsItemInRecent } from '../redux/selectors';
import { useCallback } from 'react';

export const useRecentVisits = () => {
  const dispatch = useDispatch();
  const items = useSelector(getRecentItems);
  const error = useSelector(getRecentError);

  const addToRecent = useCallback((item) => {
    dispatch(addToRecentAsync(item));
  }, [dispatch]);

  const isInRecent = useCallback((itemId) => {
    return items.some(item => item.id === itemId);
  }, [items]);

  return {
    items,
    error,
    addToRecent,
    isInRecent,
  };
};
