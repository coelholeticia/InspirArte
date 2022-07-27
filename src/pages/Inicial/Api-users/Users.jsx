import { useState, useEffect} from 'react'
import './users.css'

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() =>{
        fetch('https://my-json-server.typicode.com/coelholeticia/Fake-API/Users')
        .then(Response => Response.json())
        .then(data => setUsers(data))
    }, [])

    console.log(users)

   return(
    <>
        <div className='lista-user'>
          <ul className='lista'>
            {users.map(user => {
              return(
                <li className='user-item' key={user.id}>
                  <h2>{user.Nome}</h2>
                  <p>{user.Loja}</p>
                  <p>{user.cidade}</p>
                  <p>{user.Bairro}</p>
                  <div className='redes'>
                  <a className='link-user'  href={user.Facebook} target="_blank" >Facebook</a>
                  <a className='link-user'  href={user.Instagram} target="_blank" >Instagram</a>
                  </div>
  
                </li>
              )
            })}
          </ul>
        </div>

    </>
   ) 
}

export default Users