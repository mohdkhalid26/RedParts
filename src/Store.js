import { reducerFirst, reducerSecond } from "./Reducer";
import { configureStore } from "@reduxjs/toolkit";
export const Store = configureStore({
    reducer:{
        reducerFirst : reducerFirst,
        reducerSecond : reducerSecond,
    },
})