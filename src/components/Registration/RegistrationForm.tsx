import React from 'react';
import { useForm } from 'react-hook-form';
import auth from '../../store/auth';
import users from '../../store/users';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup
    .string()
    .max(255)
    .email('Must be a valid email')
    .required('Email is required.'),

  password: yup
    .string()
    .required('Password is required field')
    .min(3, 'Should be more then 3 characters')
    .max(20),
  // confirmPassword: yup
  // 	.string()
  // 	.required('Password is required field')
  // 	.oneOf([yup.ref('password'), null], 'Password must match.'),
});

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = (data?: any) => {
    console.log(data);
    auth.registrationNewUser(data);
  };

  return (
    <div>
      <div className='row'>
        <form className='col s12' onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='input-field col s12'>
              <input
                {...register('email')}
                id='email'
                type='email'
                className='validate'
                placeholder='email'
              />
            </div>
          </div>

          <div className='row'>
            <div className='input-field col s12'>
              <input
                {...register('password')}
                id='password'
                type='password'
                className='validate'
                placeholder='password'
              />
            </div>
          </div>
          <button className='btn green' type='submit'>
            Registration
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
