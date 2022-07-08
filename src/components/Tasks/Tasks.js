import './Tasks.css';
import Task from './Task/Task';
import useTask from '../../hooks/useTask';

function Tasks() {

    /* const { obtainTasks, tasks } = useTask();
    obtainTasks();
    const _tasks = tasks; */

    const _tasks = [
        { id: 1, body: 'Hacer el curso de React', category: 1 },
    ]

    return (
        <section>
            {
                _tasks.map(({ body, category, id }) => (
                    <Task body={body} category={category} key={id} />
                ))
            }
        </section>
    );
}

export default Tasks;