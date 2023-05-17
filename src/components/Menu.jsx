import React from 'react'
import { useNavigate,Link } from 'react-router-dom'

export default function Menu(props) {
    const nav = useNavigate();
  return (
    <div id='menuDiv'>
        <Link to={'/allTasks'}><button className='menuButton'>All Tasks</button></Link>
        <Link to={'/myTasks'}><button className='menuButton'>My Tasks</button></Link>
        <Link to={'/newTask'}><button className='menuButton'>New Task</button></Link>
        <Link to={'/History'}><button className='menuButton'>History</button></Link>
        <button className='menuButton' onClick={()=>{props.setShowMenu(false),nav('/')}}>Exit</button>
    </div>
  )
}
