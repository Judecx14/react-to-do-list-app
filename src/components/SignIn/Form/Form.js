import './Form.css';
import { Formik } from 'formik';
import { MailIcon, KeyIcon, LoginIcon } from '@heroicons/react/outline'
import AuthNavigationButton from '../../AuthNavigationButton/AuthNavigationButton';
import { Link, useNavigate } from "react-router-dom";
import useUser from '../../../hooks/useUser';
import { useEffect } from 'react';
import Spinner from './Spinner';

function Form() {

  const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const { isLogged, login, isLoading, hasError } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogged) navigate('/home');
  }, [isLogged, navigate]);

  return (
    <>
      <AuthNavigationButton signIn={true} />
      <Formik
        initialValues={{
          email: '',
          password: '',
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
          if (!values.password) errors.password = 'Password is required';
          return errors;
        }}
        onSubmit={({ email, password }, { setSubmitting }) => {
          login({ email: email, password: password });
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
            <form className='flex flex-col justify-center items-center' onSubmit={handleSubmit}>
              <LoginIcon className="h-32 w-32 mr-3 text-zinc-300 animate__animated animate__fadeInUp" />
              <div className='flex items-center my-3 w-3/5 animate__animated animate__fadeInUp'>
                <MailIcon className="h-7 w-7 mr-3 text-cyan-500" />
                <input
                  className='input-custom w-full'
                  type="email"
                  name="email"
                  placeholder='Email address'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
              </div>
              <small className='text-red-400'>
                {errors.email && touched.email && errors.email}
              </small>
              <div className='flex items-center my-3 w-3/5 animate__animated animate__fadeInUp'>
                <KeyIcon className="h-7 w-7 mr-3 text-cyan-500" />
                <input
                  className='input-custom w-full'
                  type="password"
                  name="password"
                  placeholder='Password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
              <small className='text-red-400'>
                {errors.password && touched.password && errors.password}
              </small>
              {
                isLoading
                  ? <Spinner />
                  : <button className='btn-submit mt-5 w-2/5 animate__animated animate__fadeInUp' type="submit" disabled={isSubmitting}>
                    Sign In
                  </button>
              }
              <small className='mt-5 text-cyan-600 animate__animated animate__fadeInUp'>
                <Link to='/' >Create Account</Link>
              </small>
              {
                hasError && <small className='mt-5 text-red-400 animate__animated animate__fadeInUp'>
                  Something is wrong :c
                </small>
              }
            </form>
          )
        }
      </Formik>
    </>
  );
}

export default Form;