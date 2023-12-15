import React from 'react';
import { showFormattedDate } from '../utils/dummyData';

function NoteContent({ title, createdAt, body }) {
  const formattedDate = showFormattedDate(createdAt);

  return (
    <div className='flex flex-col p-4 md:h-60'>
        <h1 className='text-red-500 font-bold text-xl'>{title}</h1>
        <p className='text-xs dark:text-white'>{formattedDate}</p>
        <p className="text-sm pt-4 overflow-auto dark:text-white">{body}</p>
    </div>
  )
}

export default NoteContent;