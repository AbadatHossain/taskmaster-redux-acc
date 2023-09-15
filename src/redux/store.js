import { configureStore } from '@reduxjs/toolkit'
import tasksSlice from './features/task/taskSlice'
export const store = configureStore({
  reducer: {
    tasks: tasksSlice,
  },
})