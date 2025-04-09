import {configureStore} from "@reduxjs/toolkit"
import countReducer from "./features/counter/CounterSlice"
import taskReducer from "./features/task/TaskSlice"

export const store = configureStore({
    reducer: {
        counter: countReducer,
        todo: taskReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch