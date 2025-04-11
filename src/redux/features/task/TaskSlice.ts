import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, nanoid, type PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

interface IinitialState {
    tasks: ITask[],
    filter: 'all' | 'high' | 'medium' | 'low'
}

const initialState: IinitialState = {
    tasks: [],
    filter: 'all'
}

type DraftTask = Pick<ITask, 'description' | 'dueDate' | 'priority' | 'title'>

const createTask = (task: DraftTask) => {
    return {id: nanoid(), isCompleted: false, ...task}
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<ITask>) => {
            const taskData = createTask(action.payload)
            state.tasks.push(taskData)
        }
    }
})

export const selectTasks = (state: RootState) => {
    return state.todo.tasks
}

export const selectFilter = (state: RootState) => {
    return state.todo.filter
}

export const {addTask} = taskSlice.actions

export default taskSlice.reducer