import { useState, useEffect} from 'react'
import './users.css'
import { FaInstagram } from 'react-icons/fa';

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
        <h1>Apoie uma artesã e compre de quem faz! </h1>
        <div className='lista-user'>
          <ul className='lista'>
            {users.map(user => {
              return(
                <li className='user-item' key={user.id}>
                  <img className='logo-lojas' src={user.Imagens} alt="lojista" />
                  <div className='definir-espaço'>
                    <h2>{user.Loja}</h2>
                    <p className='bg-color'>{user.Nome}</p>
                    <p className='bg-color'>{user.cidade}</p>
                    <p className='bg-color'>{user.Bairro}</p>
                  </div>
                  <div className='redes'>
                  <a className='link-user'  href={user.Instagram} target="_blank" ><FaInstagram /></a>
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