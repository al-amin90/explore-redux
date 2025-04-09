import {configureStore} from "@reduxjs/toolkit"
import countReducer from "./features/counter/CounterSlice"
import logger from "./middlewares/logger"

export const store = configureStore({
    reducer: {
        counter: countReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch