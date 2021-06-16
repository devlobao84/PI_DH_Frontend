import React, { useState } from 'react';
import Modal from 'react-modal';
import { useHistory } from "react-router-dom";


export default function ({isOpen, onClose, onUserUpdate}) {
  const [form, setForm] = useState({
    email: '',
    nome: '',
    sobrenome: ''
  });

  let history = useHistory();

  function handleChange({target}) {
    const {id, value } = target;
    setForm({...form, [id]: value}) 
} 

  const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("Token"));
  };
  const user = getCurrentUser()


  const onSubmit = async (e) => {
    e.preventDefault();
      const user = getCurrentUser()
    const tokenRes = await fetch(`http://localhost:5000/users/delete`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token' : user.acessToken
      },
      body: JSON.stringify(form),
    } )
    
    history.push('/dashboard');
    console.log(tokenRes)
 
  }


  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="">Email</label>
            <input value={form.email} onChange={handleChange} name="email" />
          </div>

          <div>
            <label htmlFor="">Nome</label>
            <input value={form.nome} onChange={handleChange}  name="nome" />
          </div>

          <div>
            <label htmlFor="">Sobrenome</label>
            <input value={form.sobrenome} onChange={handleChange} name="sobrenome" />
          </div>


          <button>Concluir Alterações</button>
      </form>
    </Modal>
  )
}