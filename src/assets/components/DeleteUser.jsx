import React from 'react'
import './styles/deleteUsers.css'

const DeleteUser = ({ user, deleteUsersCard, setdeleteUsersCard, deleteUser }) => {


    const deleteUsersById = () => {
        deleteUser(user.id)
        console.log('x eliminado')
    }
    return (


        <>   {deleteUsersCard &&
            < div className='container__delete' >
                <div className='card__delete'>
                    <button className='btn__x' onClick={() => setdeleteUsersCard(!deleteUsersCard)}>X</button>
                    <h3 className='delete__title'>ELIMINAR USUARIO</h3>
                    <p className='delete__texto'>Desea eliminar el usuario {user.first_name} {user.last_name} ?</p>
                    <div className='container__button'>
                        <button className='button__delete' onClick={deleteUsersById}>SI</button>
                        <button className='button__delete' onClick={() => setdeleteUsersCard(!deleteUsersCard)}>NO</button>
                    </div>
                </div>
            </div>
        }
        </>
    )
}

export default DeleteUser