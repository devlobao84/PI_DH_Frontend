import React, { useState } from 'react';
import Modal from 'react-modal';
import Datetime from 'react-datetime';


export default function ({isOpen, onClose, onEventAdded}) {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const onSubmit = (e) => {
    e.preventDefault();
      onEventAdded({
        title,
        start,
        end,
    })

      onClose();
  }


  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <form onSubmit={onSubmit}>
          <input placeholder="Agendamento" value={title} onChange={e => setTitle(e.target.value)} /> 

          <div>
            <label htmlFor="">Data Inicial</label>
            <Datetime value={start} onChange={ date => setStart(date)} />
          </div>

          <div>
            <label htmlFor="">Data Final</label>
            <Datetime value={end} onChange={ date => setEnd(date)} />
          </div>


          <button>Concluir Agendamento</button>
      </form>
    </Modal>
  )
}