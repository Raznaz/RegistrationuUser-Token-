import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

function LoginForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({
    mode: 'onBlur',
  });

  const onSubmit = (data: { email: string; password: string }) => {
    console.log(data);
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
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
