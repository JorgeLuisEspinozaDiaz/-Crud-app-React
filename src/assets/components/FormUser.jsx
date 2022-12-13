import React, { useEffect } from 'react'
import logo from '/src/assets/img/logo.png'
import './styles/form.css'
import { useForm } from 'react-hook-form'

const FormUser = ({ formEstado, createUser, setFormEstado, setUpdateInfo, updateInfo, UpdateUserById }) => {

    const { register, handleSubmit, reset } = useForm()

    const createNewUser = data => {
        if (updateInfo) {
            UpdateUserById(updateInfo.id, data)
            setUpdateInfo()
            setFormEstado(!formEstado)
        } else {
            createUser(data)
            setFormEstado(!formEstado)
        }
    }

    useEffect(() => {
        reset(updateInfo)
    }, [updateInfo])

    return (
        <>
            {
                formEstado &&
                <div className='container__form'>
                    <div className='form__form'>
                        <div className='form__img'>
                            <img className='form__logo' src={logo} alt="" />
                        </div>
                        <h1 className='form__title'>  {updateInfo ? 'ACTUALIZAR DATOS' : 'Registros usuario'}</h1>
                        < button onClick={() => setFormEstado(!formEstado)} className='button__X'>X</button>
                        <form onSubmit={handleSubmit(createNewUser)} className='form__container-conte'>
                            <div className='form__div'>
                                <label className='form__label' htmlFor='email'> <i className="fa-sharp fa-solid fa-square-envelope"></i>  Email</label>
                                <input className='form_input' type='email' id='email' {...register("email")} required />
                            </div>
                            <div className='form__div'>
                                <label className='form__label' htmlFor='password'>Password</label>
                                <input className='form_input' type='password' id='password'  {...register("password")} required />
                            </div>
                            <div className='form__div'>
                                <label className='form__label' htmlFor='first_name'>First name</label>
                                <input className='form_input' type='text' id='first_name'  {...register("first_name")} required />
                            </div>
                            <div className='form__div'>
                                <label className='form__label' htmlFor='last_name'>Last name</label>
                                <input className='form_input' type='text' id='last_name'  {...register("last_name")} required />
                            </div>
                            <div className='form__div'>
                                <label className='form__label' htmlFor='birthday'>Birthday</label>
                                <input className='form_input' type='date' id='birthday'  {...register("birthday")} required />
                            </div>
                            <button className='form__btn'>{updateInfo ? 'UPDATE' : 'CREATE'}</button>
                        </form>
                    </div>

                </div>

            }
        </>
    )
}

export default FormUser