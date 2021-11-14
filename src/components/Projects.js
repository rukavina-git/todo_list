import React, { useState } from 'react'
//import AddNewProject from './AddNewProject'
//import Project from './Project'
import { CaretUp, Palette, PencilSquare, Plus } from 'react-bootstrap-icons'

function Projects() {
  const [showMenu, setShowMenu]=useState(false);
  return (
    <div className='projects'>
      <div className="header">
        <div className="title">
        <Palette size="24"/>
          <p>Projects</p>
        </div>
        <div className="buttons">{
          showMenu &&
          <span><PencilSquare size="20"/></span>
          }
          <span><Plus size="26"/></span>
          <span><CaretUp size="24" 
          onClick={(e)=>{showMenu ? setShowMenu(false) : setShowMenu(true)}}
          /></span>
        </div>
      </div>
      <div className="items">
      <p>work project</p>
      <p>work project</p>
      <p>work project</p>
      </div>
    </div>
  )
}

export default Projects
