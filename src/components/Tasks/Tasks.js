import './Tasks.css';
import Task from './Task/Task';

function Tasks() {

    const tasks = [
        {
            id: 1,
            name: 'Cesar',
            category: 'Work',
        },
        {
            id: 2,
            name: 'Doctor',
            category: 'Dance',
        },
        {
            id: 3,
            name: 'Toro',
            category: 'Sport',
        },
    ]

    return (
        <section className='p-5'>
            {
                tasks.map(({ name, category, id }) => (
                    <Task name={name} category={category} key={id}/>
                ))
            }
        </section>
    );
}

export default Tasks;