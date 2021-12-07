import React from 'react';
import { useForm } from 'react-hook-form';
import users from '../../store/users';

function RegistrationForm() {
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

  const onSubmit = (data?: any) => {
    users.addNewUser(data);
  };

  return (
    <div>
      <div className='row'>
        <form className='col s12' onSubmit={handleSubmit(onSubmit)}>
          <div className='row'>
            <div className='input-field col s12'>
              <input id='email' type='email' className='validate' />
              <label htmlFor='email'>Email</label>
            </div>
          </div>

          <div className='row'>
            <div className='input-field col s12'>
              <input id='password' type='password' className='validate' />
              <label htmlFor='password'>Password</label>
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
