import './Form.css';
import profilePhotoIcon from '../../../assets/profile-picture.png'
import { Formik } from 'formik';
import { UserCircleIcon, MailIcon, KeyIcon } from '@heroicons/react/outline'
import AuthNavigationButton from '../../AuthNavigationButton/AuthNavigationButton';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import utils from '../../../utils/tools';
import useUser from '../../../hooks/useUser';
import { useEffect } from 'react';
import Spinner from '../../SignIn/Form/Spinner';

function Form() {

  const pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const { isLogged, signUp, isLoading, hasError } = useUser();
  const [image, setImage] = useState(profilePhotoIcon);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogged) navigate('/home');
  }, [isLogged, navigate]);
  const handleInputImage = (e) => {
    let file = e.target.files[0];
    utils.getBase64(file, (result) => {
      setImage(result);
    });
  }

  return (
    <>
      <AuthNavigationButton signUp={true} />
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirm_password: ''
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
          if (!values.password) errors.password = 'Password is required';
          if (!values.confirm_password) {
            errors.confirm_password = 'Confirm password is required'
          } else if (
            values.password !== values.confirm_password
          ) {
            errors.confirm_password = "Password doesn't match";
          };
          return errors;
        }}
        onSubmit={({ email, password, confirm_password, name, file }, { setSubmitting }) => {
          signUp({ email: email, password: password, passwordConfirmation: confirm_password, name: name, profilePicture: file });
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
              <label className='text-center cursor-pointer animate__animated animate__fadeInUp' htmlFor='profile-photo' id='profile-photo-label'>
                <img src={image} className='w-20 h-20 object-cover rounded-full' alt='label-icon' />
                Profile Photo
              </label>
              <input onChange={handleInputImage} type='file' name='profile-photo' id='profile-photo' hidden accept="image/png, image/jpeg" />
              <div className='flex items-center my-3 w-3/5 animate__animated animate__fadeInUp'>
                <UserCircleIcon className="h-7 w-7 mr-3 text-cyan-500" />
                <input
                  className='input-custom w-full'
                  type='text'
                  name="name"
                  placeholder='Name'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </div>
              <small className='text-red-400'>
                {errors.name && touched.name && errors.name}
              </small>
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
              <div className='flex items-center my-3 w-3/5 animate__animated animate__fadeInUp'>
                <KeyIcon className="h-7 w-7 mr-3 text-cyan-500" />
                <input
                  className='input-custom w-full'
                  type="password"
                  name="confirm_password"
                  placeholder='Confirm password'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.confirm_password}
                />
              </div>
              <small className='text-red-400'>
                {errors.confirm_password && touched.confirm_password && errors.confirm_password}
              </small>
              {
                isLoading
                  ? <Spinner />
                  : <button className='btn-submit mt-5 w-2/5 animate__animated animate__fadeInUp' type="submit" disabled={isSubmitting}>
                    Sign Up
                  </button>
              }

              <small className='mt-5 text-cyan-600 animate__animated animate__fadeInUp'>
                <Link to='/sign-in' >Do you already have an account?</Link>
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