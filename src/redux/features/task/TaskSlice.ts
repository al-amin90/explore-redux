import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

interface IinitialState {
    tasks: ITask[]
}

const initialState: IinitialState = {
    tasks: [
        {
            id: '34',
            title: 'Intitalze frontend',
            description: 'create home page and routing',
            dueDate: '2032',
            isCompleted: false,
            priority: 'High'
        },
        {
            id: '34',
            title: 'Intitalze frontend',
            description: 'create home page and routing',
            dueDate: '2032',
            isCompleted: false,
            priority: 'High'
        }
    ]
}

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {}
})

export default taskSlice.reducer