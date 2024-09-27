import { ADD_TO_RECENT } from "./actionTypes";



export const addToResent=(item)=>{
    const itemWithDate = {
      ...item,
      // dateAdded: new Date().toISOString(),
      dateAdded: "2024-09-20T21:32:00.497Z",
      // dateAdded: "2024-09-24T21:33:40.564Z",
    };
  
    return {
      type: ADD_TO_RECENT,
      payload: itemWithDate,
    };
  };
  