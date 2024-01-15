import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const AddUserForm = (props) => {

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    const newUser = {
      id: null,
      name: data.name,
      username: data.username
    }
    props.addUser(newUser)
    console.log(newUser);
    e.target.reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        {...register('name', { required: 'Campo obligatorio' })}
        aria-invalid={errors.name ? 'true' : 'false'}
        className='input'
      />
      <span className='text-red-500 text-small block'>
        {errors.name && <p>{errors.name.message}</p>}
      </span>
      <label>Username</label>
      <input
        type="text"
        {...register('username', { required: 'Campo obligatorio' })}
        aria-invalid={errors.username ? 'true' : 'false'}
        className='input'
      />
      <span className='text-red-500 text-small block'>
        {errors.username && <p>{errors.username.message}</p>}
      </span>
      <button className='button1 bg-[#186aea] text-white mt-4 w-fit' type='submit'>Add new user</button>
    </form>
  )
}

export default AddUserForm