import React, { useContext } from 'react'
import { FirstContext } from '../context/FirstContext';

const Child2 = () => {
    const { address } = useContext(FirstContext);
  return (
    <div>
          <div>Chid 2</div>
          <div>{address}</div>
    </div>
  )
}

export default Child2
