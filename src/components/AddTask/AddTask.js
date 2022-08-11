import './AddTask.css';
import { Formik } from 'formik';
import { CheckIcon } from '@heroicons/react/outline';
import useTasks from '../../hooks/useTask';

function AddTask() {

    const { addTask } = useTasks();

    return (
        <Formik
            initialValues={{
                task: '',
                category: '',
            }}
            validate={values => {
                const errors = {};
                if (!values.task) {
                    errors.task = 'A task is required 😡';
                }
                if (!values.category) {
                    errors.category = 'A category is required 😡';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                addTask({ body: values.task, category: values.category });
                setSubmitting(false);
            }}
        >
            {
                ({
                    values,
                    errors,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                    <>
                        <div className='add-task-container flex justify-between items-center'>
                            <form className='flex items-center justify-between w-full' onSubmit={handleSubmit}>
                                <input
                                    id='task'
                                    name='task'
                                    className='add-task-input w-96 bg-transparent'
                                    type="text"
                                    placeholder="Enter a new task, hit enter to create."
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.task}
                                />
                                <div className='flex'>
                                    <select 
                                        name="category"
                                        value={values.category}
                                        onChange={handleChange}
                                        onBlur={handleBlur} 
                                        id="category" 
                                        className='h-8 mr-3 button-categories flex justify-around items-center'
                                    >
                                        <option value="Work">
                                            Work
                                        </option>
                                        <option value="Home">
                                            Home
                                        </option>
                                        <option value="Health">
                                            Health
                                        </option>
                                        <option value="School">
                                            School
                                        </option>
                                    </select>

                                    <button className='w-12 h-8 button-categories flex justify-around items-center' type='submit'>
                                        <CheckIcon className='w-5 h-5 text-gray-500' />
                                    </button>
                                </div>
                            </form>
                        </div>
                        <small className='text-red-400'>
                            {errors.task && errors.task}
                        </small>
                        <br />
                        <small className='text-red-400'>
                            {errors.category && errors.category}
                        </small>
                    </>
                )
            }
        </Formik>
    );
}

export default AddTask;