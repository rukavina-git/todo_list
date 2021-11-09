import React, {useState} from 'react'
import Modal from './Modal'
import {Bell} from 'react-bootstrap-icons'

function AddNewTodo() {
  const [showModal, setShowModal] = useState(false);
  const [text, setText]=useState('');
  return (
  <div className='AddNewTodo'>
    <div className='btn'>
    <button onClick={()=>setShowModal(true)}>
      + New Todo
    </button>
    </div>
    <Modal showModal={showModal} setShowModal={setShowModal}>
<form>
  <div className="text">
    <h3>Add new Todo</h3>
<input type="text" value={text} onChange={e => setText(e.target.value)} placeholder="Todo ..." autoFocus/>
  </div>
  <div className="remind">
    <Bell/>
    <p>Remind me!</p>
  </div>
  <div className="pickDay">

  </div>
</form>
    </Modal>
  </div>
  )
}

export default AddNewTodo
