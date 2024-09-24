import { ADD_TO_RECENT } from "./actionTypes";


export const addToResent=(item)=>{
    const itemWithDate = {
      ...item,
      dateAdded: new Date().toISOString(),
    };
  
    return {
      type: ADD_TO_RECENT,
      payload: itemWithDate,
    };
  };
  