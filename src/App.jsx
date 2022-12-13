
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardUsers from './assets/components/CardUsers'
import FormUser from './assets/components/FormUser'
function App() {


  const [users, setUsers] = useState()
  const [formEstado, setFormEstado] = useState(false)
  const [updateInfo, setUpdateInfo] = useState()


  const getAllUser = () => {
    const URL = 'http://users-crud.academlo.tech/users/'
    axios.get(URL)
      .then(res => setUsers(res.data))
      .catch(err => console.log(err))
  }

  const createUser = data => {
    const URL = 'http://users-crud.academlo.tech/users/'
    axios.post(URL, data)
      .then(() => { getAllUser() })
      .catch(err => console.log(err))
  }

  const deleteUser = (id) => {
    const URL = `http://users-crud.academlo.tech/users/${id}/`
    axios.delete(URL)
      .then(() => { getAllUser() })
      .catch(err => console.log(err))

  }

  const UpdateUserById = (id, data) => {
    const URL = `http://users-crud.academlo.tech/users/${id}/`
    axios.patch(URL, data)
      .then(() => { getAllUser() })
      .catch(err => console.log(err))
  }



  useEffect(() => {
    getAllUser()
  }, [])


  return (
    <div className="App">

      <div className='App__header'>
        <h1 className='header__title'>Users</h1>
        <button className='header__btn' onClick={() => setFormEstado(!formEstado)}>Create new user</button>
      </div>

      <FormUser formEstado={formEstado}
        setFormEstado={setFormEstado}
        createUser={createUser}
        setUpdateInfo={setUpdateInfo}
        updateInfo={updateInfo}
        UpdateUserById={UpdateUserById}
      />

      <div className='Container__card'>
        {
          users?.map(user => (<CardUsers key={user.id}
            user={user}
            deleteUser={deleteUser}
            setUpdateInfo={setUpdateInfo}
            formEstado={formEstado}
            setFormEstado={setFormEstado}

          />))
        }

      </div>
    </div>
  )
}

export default App
