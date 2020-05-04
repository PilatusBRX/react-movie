import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className='alert'>
        <FaInfoCircle className='icon' />
        <span>{alert.msg}</span>
      </div>
    )
  );
};
export default Alert;
