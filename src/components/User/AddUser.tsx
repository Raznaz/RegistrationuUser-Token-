import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import users from '../../store/users';

function AddUser() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    mode: 'onBlur',
    // resolver: yupResolver(shema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
    users.addNewUser(data);
  };
  return (
    <div>
      <h1>Add user</h1>
      <div className='row'>
        <form className='col s12' onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='input-field col s12'>
              <input
                id='email'
                type='email'
                className='validate'
                placeholder='email'
                {...register('email')}
              />
            </div>
          </div>

          <div className='row'>
            <div className='input-field col s12'>
              <input
                id='password'
                type='password'
                className='validate'
                placeholder='password'
                {...register('password')}
              />
            </div>
          </div>
          <button className='btn green' type='submit'>
            Add user
          </button>
        </form>
      </div>
    </div>
  );
}

export default observer(AddUser);
