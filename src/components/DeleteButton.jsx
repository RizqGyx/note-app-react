import React from 'react';
import { FaTrash } from "react-icons/fa";

function DeleteButton({ id, onDelete }) {
  const handleDelete = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this note?');

    if (confirmDelete) {
      onDelete(id);
    }
  };

  return (
    <div className='w-full flex justify-center bg-red-600 py-2 border-black border-[1px] dark:border-white cursor-pointer' onClick={handleDelete}>
      <button className='text-white text-xl'><FaTrash /></button>
    </div>
  );
}

export default DeleteButton;
