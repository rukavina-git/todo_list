import React, {useState} from 'react'
import Modal from './Modal'
import {Bell, CalendarDay, Clock, Palette, X} from 'react-bootstrap-icons'
import { MuiPickersUtilsProvider, DatePicker, TimePicker} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';


function AddNewTodo() {
  const [showModal, setShowModal] = useState(false);
  const [text, setText]=useState('');
  const [date, setDate]=useState(new Date());
  const [time, setTime]=useState(new Date());
  return (
  <div className='AddNewTodo'>
    <div className='btn'>
    <button onClick={()=>setShowModal(true)}>
      + New Todo
    </button>
    </div>
    <Modal showModal={showModal} setShowModal={setShowModal}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
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
    <div className="title">
      <CalendarDay/>
     <p>Chose a day</p>
    </div>
      <DatePicker 
      value={date} 
      onChange={()=>setDate(date)} 
      />
  </div>
  <div className="pickTime">
    <div className="title">
      <Clock/>
     <p>Chose time</p>
    </div>
      <TimePicker 
      value={time} 
      onChange={()=>setTime(time)} 
      />
  </div>
  <div className="pickProject">
    <div className="title">
      <Palette/>
      <p>Chose a project</p>
    </div>
    <div className="projects">
      <div className="project">Personal project</div>
      <div className="project">Work project</div>
    </div>
  </div>
  <div className="cancel" onClick={()=>setShowModal(false)}><X size="35" />
  </div>
  <div className="confirm">
    <button>+ Add todo</button>
    </div>
  </form>
  </MuiPickersUtilsProvider>
    </Modal>
  </div>
  )
}

export default AddNewTodo
