import React, { useContext } from 'react'
import { FirstContext } from '../context/FirstContext';

const Child3 = () => {
    const {username} =useContext(FirstContext)
  return (
    <div>
        <div>Child 3</div>
        <div>{username}</div>
    </div>
  )
}

export default Child3
