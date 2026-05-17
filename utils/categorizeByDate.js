import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import isToday from 'dayjs/plugin/isToday';
import isYesterday from 'dayjs/plugin/isYesterday';

dayjs.extend(relativeTime);
dayjs.extend(isToday);
dayjs.extend(isYesterday);

export const categorizeByDate = (items) => {
  const todayArray = { date: "Today", items: [] };
  const yesterdayArray = { date: "Yesterday", items: [] };
  const dateArrays = [];

  items.forEach((obj) => {
    const dateAdded = dayjs(obj.dateAdded);

    if (dateAdded.isToday()) {
      todayArray.items.push(obj);
    } else if (dateAdded.isYesterday()) {
      yesterdayArray.items.push(obj);
    } else {
      const readableDate = dateAdded.format('MMMM D, YYYY');
      let dateGroup = dateArrays.find(group => group.date === readableDate);
      if (!dateGroup) {
        dateGroup = { date: readableDate, items: [] };
        dateArrays.push(dateGroup);
      }
      dateGroup.items.push(obj);
    }
  });

  const result = [];
  if (todayArray.items.length > 0) result.push(todayArray);
  if (yesterdayArray.items.length > 0) result.push(yesterdayArray);
  result.push(...dateArrays);

  return result;
};
