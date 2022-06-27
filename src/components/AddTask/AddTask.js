import './AddTask.css';
import { Formik } from 'formik';
import DropdownCategories from './DropdownCategories/DropdownCategories';

function AddTask() {
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
                console.log(values);
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
                            <form onSubmit={handleSubmit}>
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
                            </form>
                            <DropdownCategories />
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