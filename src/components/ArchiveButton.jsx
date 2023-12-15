import React from 'react'
import { BiSolidFileArchive } from "react-icons/bi";

function ArchiveButton({ id, onArchive }) {
  return (
    <div className='w-full flex justify-center bg-yellow-600 py-2 border-black border-[1px] dark:border-white cursor-pointer' onClick={() => onArchive(id)}>
      <button className='text-white text-xl'><BiSolidFileArchive /></button>
    </div>
  )
}

export default ArchiveButton