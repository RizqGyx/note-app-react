import React from 'react'
import { FaTrash } from "react-icons/fa";

function DeleteButton({ id, onDelete }) {
  return (
    <div className='w-full flex justify-center bg-red-600 py-2 border-black border-[1px] dark:border-white cursor-pointer' onClick={() => onDelete(id)}>
      <button className='text-white text-xl'><FaTrash /></button>
    </div>
  )
}

export default DeleteButton