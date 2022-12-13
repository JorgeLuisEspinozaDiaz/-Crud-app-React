import React, { useState } from 'react'
import DeleteUser from './DeleteUser'
import './styles/card.css'

const CardUsers = ({ user, deleteUser, setUpdateInfo, formEstado, setFormEstado }) => {

    const [deleteUsersCard, setdeleteUsersCard] = useState(false)


    const updateInfoCard = () => {
        setUpdateInfo(user)
        setFormEstado(!formEstado)

    }

    const deleteUserByid = () => {
        if (setdeleteUsersCard(!deleteUsersCard)) {
            deleteUser(user.id)
        }
    }

    return (
        <div className='card'>
            <h2 className='card__title'>{user.first_name} {user.last_name}</h2>
            <hr className='card__hr' />
            <ul className='card__list'>
                <li className='card__item'><span className='card__span'> <i className="fa-sharp fa-solid fa-envelope icons"></i>EMAIL</span> {user.email}</li>
                <li className='card__item'> <span className='card__span'> <i className="fa-sharp fa-solid fa-gift card__gift"></i>BIRTHDAY</span>{user.birthday}</li>
            </ul>
            <div className='container__botton'>
                <button className='botton__botton' onClick={deleteUserByid}><i className="fa-sharp fa-solid fa-trash delete_trash"></i></button>
                <button className='botton__botton' onClick={updateInfoCard}><i className="fa-sharp fa-solid fa-pen-to-square update__square "></i></button>
            </div>
            <div>
                <DeleteUser user={user} deleteUsersCard={deleteUsersCard} setdeleteUsersCard={setdeleteUsersCard} deleteUser={deleteUser} />
            </div>
        </div>
    )
}

export default CardUsers