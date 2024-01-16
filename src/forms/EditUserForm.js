import React from 'react'
import { useForm } from 'react-hook-form'
import { useState , useEffect } from 'react'

const EditUserForm = (props) => {

  const [user, setUser] = useState(props.currentUser)

  const { register, formState: { errors }, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    const updatedUser = {
      id: user.id,
      name: data.name,
      username: data.username
    }
    props.updateUser(user.id, updatedUser)
    setUser(updatedUser);
    console.log(updatedUser);
    e.target.reset();
  }

  useEffect(() => {
    setUser(props.currentUser)
  }, [props])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        type="text"
        defaultValue={user.name}
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
        defaultValue={user.username}
        {...register('username', { required: 'Campo obligatorio' })}
        aria-invalid={errors.username ? 'true' : 'false'}
        className='input'
      />
      <span className='text-red-500 text-small block'>
        {errors.username && <p>{errors.username.message}</p>}
      </span>
      <button className='button1 bg-[#186aea] text-white mt-4 w-fit' type='submit'>Update user</button>
      <button
        onClick={() => props.setEditing(false)}
        className='button1 bg-red-500 text-white mt-4 w-fit'
      >
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm