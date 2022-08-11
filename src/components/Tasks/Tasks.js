import './Tasks.css';
import Task from './Task/Task';
import useTask from '../../hooks/useTask';
import { useEffect } from 'react';

function Tasks() {

    const { obtainTasks, tasks } = useTask();

    useEffect(() => obtainTasks(), [obtainTasks]);

    return (
        <section className='pb-12'>
            {
                tasks.map(({ body, category, id }) => (
                    <Task body={body} category={category} key={id} />
                ))
            }
        </section>
    );
}

export default Tasks;