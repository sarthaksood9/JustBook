import { SELECT } from "./actionTypes";


export const selectProduct=(item)=>({
    type:SELECT,
    payload:item,
})