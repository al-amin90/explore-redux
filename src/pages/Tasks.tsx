import { useAppSelector } from '@/redux/hook';

const Tasks = () => {
    const tasks = useAppSelector((state) => state.todo.tasks)
    console.log(tasks);

    return (
        <div>
            this is taskss
        </div>
    );
};

export default Tasks;