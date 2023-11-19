import React from 'react'
import Input from '../components/Input'
import useInput from '../Hooks/useInput'
import { CREATE_USER } from '../api';
import { useNavigateContext } from '../Context/navigate';

function AdminLogin () {
    const name = useInput();
    const password = useInput();
    const { navigate } = useNavigateContext();
  return (
      <form onSubmit={async event => {
        event.preventDefault()
        const response = await fetch('http://localhost:3000/admin', CREATE_USER({ name : name.value, password : password.value}))
        if (response.status === 200) {
          navigate("/")
        }
    }}>
        <Input label='name' name="name" type='text' {...name} />
        <Input label='password' name='password' type='password' {...password}/>
        <button type="submit">Enviar</button>
    </form>
  )
}

export default AdminLogin 