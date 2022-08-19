import './ProfileData.css'
import { Formik } from 'formik';
import { MailIcon, UserIcon, PencilIcon } from '@heroicons/react/outline'
import useUser from '../../../hooks/useUser';
import { useEffect, useState } from 'react';
import Spinner from '../../SignIn/Form/Spinner';

function ProfileData() {
    const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const {  isLoading, hasError, getData, userData} = useUser();
    const [isEmailDisabled, setIsEmailDisabled] = useState(true);
    const [isNameDisabled, setIsNameDisabled] = useState(true);
    useEffect(() => getData(), [getData]);
    const {email, name} = userData;
    return (
        <section>
            <p className="font-thin text-xl mt-4">Account infromation</p>
            <Formik
                enableReinitialize={true}
                initialValues={{
                    email: email,
                    name: name,
                }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Email is required';
                    } else if (
                        !pattern.test(values.email)
                    ) {
                        errors.email = 'Invalid email adrress';
                    }
                    if (!values.name) errors.name = 'Name is required';
                    return errors;
                }}
                onSubmit={({ email, name }, { setSubmitting }) => {
                    
                    setSubmitting(false);
                }}
            >
                {
                    ({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <div>
                            <form className='flex' onSubmit={handleSubmit}>
                                <div className='flex items-center my-3 w-3/5 animate__animated animate__fadeInUp'>
                                    <MailIcon className="h-7 w-7 mr-3 text-cyan-500" />
                                    <input
                                        disabled={isEmailDisabled}
                                        className='input-custom w-full'
                                        type="email"
                                        name="email"
                                        placeholder='Email address'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.email || ''}
                                    />
                                    <button type='button' className='button-custom h-10 w-10 text-center mx-3' onClick={()=>{setIsEmailDisabled(!isEmailDisabled)}}>
                                        <PencilIcon className="h-7 w-7 mr-3 text-gray-400 ml-1" />
                                    </button>
                                </div>
                                <div className='flex items-center my-3 w-3/5 animate__animated animate__fadeInUp'>
                                    <UserIcon className="h-7 w-7 mr-3 text-cyan-500" />
                                    <input
                                        disabled={isNameDisabled}
                                        className='input-custom w-full'
                                        type="text"
                                        name="name"
                                        placeholder='name'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.name || ''}
                                    />
                                    <button type='button' className='button-custom h-10 w-10 text-center mx-3' onClick={()=>{setIsNameDisabled(!isNameDisabled)}}>
                                        <PencilIcon className="h-7 w-7 mr-3 text-gray-400 ml-1"/>
                                    </button>
                                </div>
                            </form>
                            <small className='text-red-400'>
                                {errors.name && touched.name && errors.name + ' 😡'}
                            </small>
                            <br></br>
                            <small className='text-red-400'>
                                {errors.email && touched.email && errors.email + ' 😡'}
                            </small>
                            <div className='flex flex-col'>
                                {
                                    isLoading
                                        ? <Spinner />
                                        : <button className='button-custom mt-5 w-full animate__animated animate__fadeInUp text-cyan-600 font-bold' type="submit" disabled={isSubmitting}>
                                            Save
                                        </button>
                                }
                                <button className='text-red-600 font-manrope mt-5 w-full animate__animated animate__fadeInUp' type="submit" disabled={isSubmitting}>
                                    Delete account
                                </button>
                                {
                                    hasError && <small className='mt-5 text-red-400 animate__animated animate__fadeInUp'>
                                        Something is wrong :c
                                    </small>
                                }

                            </div>
                        </div>
                    )
                }
            </Formik>
        </section>
    );
}

export default ProfileData;